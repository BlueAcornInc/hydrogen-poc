import {Image} from '@shopify/hydrogen';
import {Heading, Section, Grid, Link} from '~/components';
import {useState, useEffect} from 'react';

export function FeaturedCollections({
  collections: initialCollections,
  title = 'Collections',
  ...props
}) {
  const [collections, setCollections] = useState(initialCollections);

  const loadFeaturedCollectionsData = async () => {
    const filteredCollections = await [...collections].filter(
      (collection) => collection.handle.toLowerCase() !== 'freestyle-content',
    );

    setCollections(filteredCollections);
  };

  useEffect(() => {
    loadFeaturedCollectionsData();
    // dependency array is empty so data loads once, on load
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const haveCollections = collections && collections.length > 0;

  console.log('collections, begin ========');
  console.log({collections});
  console.log('collections, end ========');

  if (!haveCollections) return null;

  const items = collections.filter((item) => item.image).length;

  return (
    <Section {...props} heading={title}>
      <Grid items={items}>
        {collections.map((collection) => {
          if (!collection?.image) {
            return null;
          }
          return (
            <Link key={collection.id} to={`/collections/${collection.handle}`}>
              <div className="grid gap-4">
                <div className="card-image bg-primary/5 aspect-[3/2]">
                  {collection?.image && (
                    <Image
                      alt={`Image of ${collection.title}`}
                      data={collection.image}
                      height={400}
                      sizes="(max-width: 32em) 100vw, 33vw"
                      width={600}
                      widths={[400, 500, 600, 700, 800, 900]}
                      loaderOptions={{
                        scale: 2,
                        crop: 'center',
                      }}
                    />
                  )}
                </div>
                <Heading size="copy">{collection.title}</Heading>
              </div>
            </Link>
          );
        })}
      </Grid>
    </Section>
  );
}
