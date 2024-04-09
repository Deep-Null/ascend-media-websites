const cheerio = require('cheerio');
const contentPublishedComponent = require('@parameter1/base-cms-marko-web/components/element/content/published');
const fetchElements = require('@parameter1/base-cms-marko-web-native-x/services/fetch-elements');
const { get, getAsObject } = require('@parameter1/base-cms-object-path');

module.exports = async ({
  content,
  parseEmbeddedMedia,
  req,
  res,
  nativeXUri,
  nativeXPlacementId,
}) => {
  let totalLength = 0;
  // Using the previous set mobile counts as the "all" counts
  const counts = [
    250,
    1650,
    2950,
    4250,
    5550,
    6850,
    8150,
    9450,
    10750,
    12050,
    13350,
    14650,
    15950,
    17250,
  ];
  const ats = {};
  counts.forEach((count) => {
    ats[count] = '<div class="inline-native-ad" />';
  });
  const targetLengths = Object.keys(ats);
  // See marko-web/componenets/element/content/body.marko
  const { body } = content;
  const bodyTrimmed = body.trim();
  const bodyParsed = parseEmbeddedMedia(bodyTrimmed, res, {}, true);
  const $ = cheerio.load(bodyParsed, {}, false);
  const children = $('p');
  const hasInjected = {};
  const canInject = ({
    targetLength,
    childLength,
    childIndex,
    childrenLength,
  } = {}) => {
    const injected = hasInjected[targetLength];
    if (injected || !targetLength) return false;
    return totalLength <= targetLength
      && totalLength + childLength >= targetLength
      && childIndex + 1 !== childrenLength;
  };
  children.each(function placeholdAds(index) {
    const child = $(this);
    const { length } = child.text().trim();
    if (length === 0) return;
    const nextChild = $(this).next('p');
    targetLengths.forEach((targetLength) => {
      if (canInject({
        targetLength,
        childLength: length,
        childIndex: index,
        childrenLength: children.length,
      })) {
        const contents = ats[targetLength];
        if (contents) {
          // Unescape closing HTML tags.
          const cleaned = contents.replace(/<\\\/(.+?)>/g, '</$1>');
          const headlineTags = 'h1,h2,h3,h4,h5,h6';
          if (nextChild.text().length <= 1) {
            // eslint-disable-next-line consistent-return
            child.nextAll('p').each(function handleBefore() {
              if ($(this).text().length > 1) {
                const previous = $(this).prev();
                if (previous.text().trim().length === 0) {
                  $(this).after(cleaned);
                } else if (previous.is(headlineTags)) {
                  previous.before(cleaned);
                } else if (previous.attr('data-embed-type')) {
                  $(this).after(cleaned);
                } else {
                  $(this).before(cleaned);
                }
                return false;
              }
            });
          } else {
            const next = $(this).next();
            if (next.attr('data-embed-type')) {
              if (child.prev().is(headlineTags)) {
                child.prev().before(cleaned);
              } else {
                child.before(cleaned);
              }
            } else if (child.is(headlineTags)) {
              child.before(cleaned);
            } else if (!next.hasClass('inline-native-ad')) {
              let hasInParagraphImage = false;
              child.children().each(function checkForChildEmbeds() {
                if ($(this).attr('data-embed-type')) hasInParagraphImage = true;
              });
              if (hasInParagraphImage) {
                next.after(cleaned);
              } else {
                child.after(cleaned);
              }
            }
          }
        }
        hasInjected[targetLength] = true;
      }
    });
    totalLength += length;
  });
  const n = $('div.inline-native-ad').length;
  const response = await fetchElements({
    uri: nativeXUri,
    placementId: nativeXPlacementId,
    opts: { n },
    req,
  });
  const { ads } = response;
  $('div.inline-native-ad').each((index, elem) => {
    const ad = ads[index];
    // @todo Determine if there is an easy way to envoke 1 Marko component here instead of multiple
    // Attempt was made using:
    // '@parameter1/base-cms-marko-web-theme-monorail/components/nodes/section-feed-content'
    // NOTE: .renderToString doesn't work this was already attempted see result here:
    /* <!--M#s2-->
    <div class="section-feed-content-node">
      <!--F#1-->
      <div class="section-feed-content-node__contents">
        <!--F#1-->
      <div class="section-feed-content-node__body">
        <!--F#1-->
        <!--F/-->
      </div>
        <!--F/-->
      </div>
      <!--F/-->
    </div>
    <!--M/-->
    */
    if (ad && Object.keys(ad).length && Object.keys(getAsObject(ad, 'creative')).length) {
      const linkAttributes = getAsObject(ad, 'attributes.link');
      const containerAttributes = getAsObject(ad, 'attributes.container');
      const link = get(ad, 'href');
      const creative = getAsObject(ad, 'creative');
      const image = getAsObject(ad, 'image');
      const updatedAt = get(ad, 'campaign.updatedAt');
      const startDate = get(ad, 'campaign.criteria.start');
      const publishedObj = {};
      publishedObj.published = updatedAt > startDate ? updatedAt : startDate;
      const replaceWith = `
    <div class="inline-native-ad-node">
      <div class="section-feed-content-node">
        <div data-fortnight-action="${containerAttributes['data-fortnight-action']}" data-fortnight-fields="${containerAttributes['data-fortnight-fields']}" data-fortnight-timestamp="${containerAttributes['data-fortnight-timestamp']}" class="section-feed-content-node__contents">
          <div class="section-feed-content-node__body">
            <div title="Sponsored" class="section-feed-content-node__website-section-name">Sponsored</div>
            <h5 class="section-feed-content-node__content-short-name">
              <a href="${link}" data-fortnight-action="${linkAttributes['data-fortnight-action']}" data-fortnight-fields="${linkAttributes['data-fortnight-fields']}" rel="${linkAttributes.rel}">
                ${creative.title}
              </a>
            </h5>
            <div class="section-feed-content-node__content-teaser">
            <a href="${link}" data-fortnight-action="${linkAttributes['data-fortnight-action']}" data-fortnight-fields="${linkAttributes['data-fortnight-fields']}" rel="${linkAttributes.rel}">
                ${creative.teaser}
              </a>
            </div>
            ${contentPublishedComponent.renderToString({ blockName: 'section-feed-content-node', obj: publishedObj, format: 'MMMM D, YYYY' })}
          </div>
          </div>
          <div class="section-feed-content-node__image-wrapper">
          <a href="${link}" data-fortnight-action="${linkAttributes['data-fortnight-action']}" data-fortnight-fields="${linkAttributes['data-fortnight-fields']}" rel="${linkAttributes.rel}">
              <picture>
                <source data-srcset="${image.src}?crop=focalpoint&amp;fit=crop&amp;fp-x=0.5&amp;fp-y=0.5&amp;h=167&amp;w=250&amp;auto=format%2Ccompress&amp;q=70, ${image.src}?auto=format%2Ccompress&amp;crop=focalpoint&amp;dpr=2&amp;fit=crop&amp;fp-x=0.5&amp;fp-y=0.5&amp;h=167&amp;q=70&amp;w=250 2x" media="(min-width: 768px)" width="250" height="167" srcset="${image.src}?crop=focalpoint&amp;fit=crop&amp;fp-x=0.5&amp;fp-y=0.5&amp;h=167&amp;w=250&amp;auto=format%2Ccompress&amp;q=70, ${image.src}?auto=format%2Ccompress&amp;crop=focalpoint&amp;dpr=2&amp;fit=crop&amp;fp-x=0.5&amp;fp-y=0.5&amp;h=167&amp;q=70&amp;w=250 2x">
                <img src="${image.src}?crop=focalpoint&amp;fit=crop&amp;fp-x=0.5&amp;fp-y=0.5&amp;h=112&amp;w=112&amp;auto=format%2Ccompress&amp;q=70" data-src="${image.src}?crop=focalpoint&amp;fit=crop&amp;fp-x=0.5&amp;fp-y=0.5&amp;h=112&amp;w=112&amp;auto=format%2Ccompress&amp;q=70" data-srcset="${image.src}?crop=focalpoint&amp;fit=crop&amp;fp-x=0.5&amp;fp-y=0.5&amp;h=112&amp;w=112&amp;auto=format%2Ccompress&amp;q=70, ${image.src}?auto=format%2Ccompress&amp;crop=focalpoint&amp;dpr=2&amp;fit=crop&amp;fp-x=0.5&amp;fp-y=0.5&amp;h=112&amp;q=70&amp;w=112 2x" class="section-feed-content-node__image ls-is-cached lazyloaded" alt="${creative.title}" width="112" height="112" srcset="${image.src}?crop=focalpoint&amp;fit=crop&amp;fp-x=0.5&amp;fp-y=0.5&amp;h=112&amp;w=112&amp;auto=format%2Ccompress&amp;q=70, ${image.src}?auto=format%2Ccompress&amp;crop=focalpoint&amp;dpr=2&amp;fit=crop&amp;fp-x=0.5&amp;fp-y=0.5&amp;h=112&amp;q=70&amp;w=112 2x">
              </picture>
            </a>
          </div>
        </div>
      </div>`;
      $(elem).replaceWith(replaceWith);
    }
    $(elem).replaceWith('');
  });
  return { body: $.html() };
};
