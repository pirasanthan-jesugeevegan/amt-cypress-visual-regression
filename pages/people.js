import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import sanity from '../lib/sanity';
import listStyles from '../styles/list';
import imageUrlFor from '../utils/imageUrlFor';

const query = `*[_type == "person"] {
  _id,
  name,
  image,
  "imageAspect": image.asset->.metadata.dimensions.aspectRatio,
}[0...20]
`;
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
const People = ({ people }) => {
  shuffle(people);
  return (
    <Layout>
      <div className="people">
        <ul className="list">
          {people.map((person) => (
            <li key={person._id} className="list__item">
              <Link href="/person/[id]" as={`/person/${person._id}`}>
                <a>
                  {person.image && (
                    <img
                      src={imageUrlFor(person.image).width(300)}
                      width="300"
                      height={300 / person.imageAspect}
                    />
                  )}
                  <h3>{person.name}</h3>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <style jsx>{`
        .people {
          padding: 1rem;
        }

        .people .list h3 {
          line-height: 1em;
          padding: 0.5em 0;
        }
      `}</style>
      <style jsx>{listStyles}</style>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const people = await sanity.fetch(query);
  return {
    props: { people }, // will be passed to the page component as props
  };
};

export default People;
