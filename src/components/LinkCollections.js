import React from 'react'

import LinkCollection from './LinkCollection'

const LinkCollections = () => {
  return (
    <div className="link-grid">
      <LinkCollection
        title="Reddit"
        collection={[
          { title: 'Home', url: 'https://www.reddit.com/' },
          {
            title: 'Favorites',
            url: 'https://www.reddit.com/user/curtisbridges/m/favorites/',
          },
          {
            title: 'Popular',
            url: 'https://www.reddit.com/r/popular/',
          },
        ]}
        icon={['fab', 'reddit']}
      />
      <LinkCollection
        title="Spotify"
        collection={[
          {
            title: 'Everyday',
            url:
              'https://open.spotify.com/playlist/6qQrcOJvxzG1J8T1QLCqz6?si=YI8PaaXTTQ6t0TOeC6UCpQ',
          },
          {
            title: 'Mellow',
            url:
              'https://open.spotify.com/playlist/0JnC951eo7uaCmsA8Ci39C?si=1yzBkmNJQxqdx0nZk9QY_g',
          },
          {
            title: 'Harder',
            url:
              'https://open.spotify.com/playlist/5fkuZsPtq6z9kWsSur1pb0?si=qHGDQ5kHRhywN_edi9-t_g',
          },
        ]}
        icon={['fab', 'spotify']}
      />
    </div>
  )
}

export default LinkCollections
