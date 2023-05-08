import clsx from 'clsx';
import {MediaFile} from '@shopify/hydrogen';
import {Heading, Text, Link} from '~/components';

/**
 * Hero component that renders metafields attached to collection resources
 **/
export function Hero({
  byline,
  cta,
  handle,
  heading,
  height,
  loading,
  spread,
  spreadAltText,
  spreadSecondary,
  spreadSecondaryAltText,
  top,
  promo,
}) {

  const spreadAlt = spreadAltText?.value;
  const spreadSecondaryAlt = spreadSecondaryAltText?.value;

  return (
    <Link to={`/collections/${handle}`}>
      <section
        data-test={promo?.value}
        className={clsx(
          'relative justify-end flex flex-col w-full',
          top && '-mt-nav',
          height === 'full'
            ? 'h-screen'
            : 'aspect-[4/5] sm:aspect-square md:aspect-[5/4] lg:aspect-[3/2] xl:aspect-[2/1]',
        )}
      >
        <div className="absolute w-100 hydro-float left-0 svg-width-full desktop:block">
          <svg
            viewBox="0 0 389 550"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-labelledby="hydrogenLogoStackedDesktopTitle"
          >
            <title id="hydrogenLogoStackedDesktopTitle">
              Floating Hydrogen logo symbols.
            </title>
            <g className="mix-blend-multiply">
              <path
                d="M-311.877 612.916V551.275L34.7047 735.033L153.333 673.393V735.033C114.954 756.356 37.4959 799 34.7047 799L-311.877 612.916Z"
                fill="black"
              ></path>
              <path
                d="M139.377 546.623L264.984 612.916C270.567 610.124 344.845 570.271 382.45 551.275V612.916L264.984 676.882L139.377 609.426L85.8779 637.339L26.5635 605.937L139.377 546.623Z"
                fill="black"
              ></path>
              <path
                d="M-80.435 429.157V494.287L-6.00125 531.504L52.6797 501.086L-80.435 429.157Z"
                fill="black"
              ></path>
            </g>
            <path
              d="M34.9011 735.71L-316 551.614L-195.99 489.15L-60.8746 560.002L52.496 500.983L-82.6192 430.131L37.391 367.517L388.292 551.614L268.282 614.078L140.636 547.12L27.0996 606.288L154.911 673.246L34.9011 735.71Z"
              fill="#323232"
            ></path>
            <g className="mix-blend-multiply animate-float">
              <path
                d="M-311.877 245.398V183.758L37.5498 367.439L153.333 305.876V367.516C114.954 388.839 37.4959 431.483 34.7047 431.483L-311.877 245.398Z"
                fill="url(#paint0_linear_2067_24412)"
              ></path>
              <path
                d="M139.377 179.106L264.984 245.398C270.567 242.607 344.845 202.754 382.45 183.758V245.398L264.984 309.365L139.377 241.909L27.7265 302.387V238.42L139.377 179.106Z"
                fill="url(#paint1_linear_2067_24412)"
              ></path>
              <path
                d="M-80.435 61.6401V126.77L-6.00125 163.987L52.1501 133.748L-80.435 61.6401Z"
                fill="url(#paint2_linear_2067_24412)"
              ></path>
            </g>
            <path
              className="animate-float"
              d="M37.5495 367.439L-316 184.097L-195.99 121.633L-60.8746 192.485L51.9588 133.647L-82.6192 62.6138L37.391 0L382.438 183.792L265.218 245.68L140.636 179.603L27.0996 238.771L154.911 305.729L37.5495 367.439Z"
              fill="url(#paint3_linear_2067_24412)"
            ></path>
            <defs>
              <linearGradient
                id="paint0_linear_2067_24412"
                x1="369.428"
                y1="260.938"
                x2="-141.903"
                y2="534.807"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.00224366" stop-color="#430470"></stop>
                <stop offset="0.385468" stop-color="#8E01F0"></stop>
                <stop offset="0.635473" stop-color="#354CF6"></stop>
                <stop offset="1" stop-color="#01FFFF"></stop>
              </linearGradient>
              <linearGradient
                id="paint1_linear_2067_24412"
                x1="369.428"
                y1="260.938"
                x2="-141.903"
                y2="534.807"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.00224366" stop-color="#430470"></stop>
                <stop offset="0.385468" stop-color="#8E01F0"></stop>
                <stop offset="0.635473" stop-color="#354CF6"></stop>
                <stop offset="1" stop-color="#01FFFF"></stop>
              </linearGradient>
              <linearGradient
                id="paint2_linear_2067_24412"
                x1="369.428"
                y1="260.938"
                x2="-141.903"
                y2="534.807"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.00224366" stop-color="#430470"></stop>
                <stop offset="0.385468" stop-color="#8E01F0"></stop>
                <stop offset="0.635473" stop-color="#354CF6"></stop>
                <stop offset="1" stop-color="#01FFFF"></stop>
              </linearGradient>
              <linearGradient
                id="paint3_linear_2067_24412"
                x1="369.339"
                y1="198.003"
                x2="-142.151"
                y2="475.381"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.00224366" stop-color="#430470"></stop>
                <stop offset="0.385468" stop-color="#8E01F0"></stop>
                <stop offset="0.635473" stop-color="#354CF6"></stop>
                <stop offset="1" stop-color="#01FFFF"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>{' '}
        <div className="absolute inset-0 grid flex-grow grid-flow-col pointer-events-none auto-cols-fr -z-10 content-stretch overflow-clip">
          {spread?.reference && (
            <div>
              <SpreadMedia
                sizes={
                  spreadSecondary?.reference
                    ? '(min-width: 48em) 50vw, 100vw'
                    : '100vw'
                }
                data={spread.reference}
                loading={loading}
                alt={spreadAlt}
              />
            </div>
          )}
          {spreadSecondary?.reference && (
            <div className="hidden md:block">
              <SpreadMedia
                sizes="50vw"
                data={spreadSecondary.reference}
                loading={loading}
                alt={spreadSecondaryAlt}
              />
            </div>
          )}
        </div>
        <div className="hero-content flex flex-col items-baseline justify-between gap-4 px-6 py-8 sm:px-8 md:px-12 bg-gradient-to-t dark:from-contrast/60 dark:text-primary from-primary/60 text-contrast">
          {heading?.value && (
            <Heading
              format
              as="h2"
              size="display"
              className="max-w-md opacity-50"
            >
              {heading.value}
            </Heading>
          )}
          {byline?.value && (
            <Text format width="narrow" as="p" size="lead">
              {byline.value}
            </Text>
          )}
          {cta?.value && <Text size="lead">{cta.value}</Text>}
        </div>
      </section>
    </Link>
  );
}

function SpreadMedia({
  data,
  loading,
  decoding,
  scale,
  sizes,
  width,
  widths,
  alt,
}) {
  return (
    <MediaFile
      data={data}
      className="block object-cover w-full h-full"
      mediaOptions={{
        video: {
          controls: false,
          muted: true,
          loop: true,
          playsInline: true,
          autoPlay: true,
          width: (scale ?? 1) * width,
          previewImageOptions: {scale, src: data.previewImage?.url ?? ''},
        },
        image: {
          loading,
          decoding,
          loaderOptions: {scale, crop: 'center'},
          widths,
          sizes,
          width,
          alt,
        },
      }}
    />
  );
}
