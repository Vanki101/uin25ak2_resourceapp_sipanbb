import { useEffect, useState } from 'react';
import resources from '../../data/ressurser';
import './Resources.scss';

const Resources = ({ category }) => {
  const [resourceItems, setResourceItems] = useState([]);

  useEffect(() => {
    // Filtrer ressursene basert på valgt kategori
    const selectedResources = resources.filter(
      res => res.category.toLowerCase() === category.toLowerCase()
    );
    setResourceItems(selectedResources);
  }, [category]);

  return (
    <>
      {resourceItems.map((resource, index) => (
        <article key={index}>
          <h2>{resource.category}</h2>
          <p>{resource.text}</p>
          <ul>
            {resource.sources.map((src, srcIndex) => (
              <li key={srcIndex}>
                <a href={src.url} target="_blank" rel="noopener noreferrer">
                  {src.title}
                </a>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </>
  );
};

export default Resources;