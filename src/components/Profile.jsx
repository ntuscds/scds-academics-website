const Profile = ({ src, alt, name, tags, linkedinUrl, personalWebsite }) => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '1.5rem',
      marginBottom: '2rem',
      padding: '1rem',
      backgroundColor: 'var(--ifm-card-background-color)',
      borderRadius: '8px',
      boxShadow: 'var(--ifm-global-shadow-lw)'
    }}>
      <div style={{ width: '135px', height: '180px', overflow: 'hidden', borderRadius: '4px', flexShrink: 0 }}>
        <img
          src={src}
          alt={alt}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      <div style={{ flex: 1 }}>
        <h3 style={{ marginTop: 0, marginBottom: '0.75rem', fontSize: '1.5rem' }}>{name}</h3>

        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', marginBottom: '0.5rem', gap: '0.5rem' }}>
          {tags.map((tag, index) => (
            <div
              key={index}
              style={{
                backgroundColor: 'var(--ifm-color-emphasis-100)',
                color: 'var(--ifm-color-emphasis-800)',
                fontSize: '0.8rem',
                padding: '0.25rem 0.5rem',
                borderRadius: '4px',
                // marginRight: index < tags.length - 1 ? '0.5rem' : '0' // Replaced by gap in parent
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '0.75rem' }}>
          {linkedinUrl && (
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.85rem',
                color: 'var(--ifm-color-primary)',
                textDecoration: 'none'
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0, position: 'relative', top: '1px' }}>
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span style={{ position: 'relative', top: '-1px' }}>Connect on LinkedIn</span>
            </a>
          )}
          {personalWebsite && (
            <a
              href={personalWebsite}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.85rem',
                color: 'var(--ifm-color-primary)',
                textDecoration: 'none'
              }}
            >
              {/* Changed SVG icon to an external link icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0, position: 'relative', top: '1px' }}>
                <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
              </svg>
              {/* Changed text from "Portfolio" to "Personal Website" */}
              <span style={{ position: 'relative', top: '-1px' }}>Personal Website</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
