export default function NuraeLanding() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#F7F1E9',
      color: '#4A3F35',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '4rem 1rem',
      fontFamily: 'serif'
    }}>
      <h1 style={{ fontSize: '2rem', fontWeight: '600', textAlign: 'center', marginBottom: '1.5rem' }}>NURAE</h1>
      <p style={{ fontSize: '1.25rem', textAlign: 'center', maxWidth: '600px', marginBottom: '2rem' }}>
        An emotionally intelligent AI oracle for spiritual healing, nervous system regulation, and inner transformation.
      </p>
      <p style={{ textAlign: 'center', maxWidth: '500px', marginBottom: '1.5rem' }}>
        We’re building sacred technology for women who are ready to feel safe, seen, and sovereign.
        Nurae listens, mirrors, and guides—with rituals, shadow work, and AI-powered emotional intelligence.
      </p>
      <form style={{ width: '100%', maxWidth: '400px', textAlign: 'center' }}>
        <input
          type="email"
          placeholder="Enter your email to join the waitlist"
          style={{
            width: '100%',
            padding: '0.75rem 1.25rem',
            borderRadius: '9999px',
            border: '1px solid #D6C7B0',
            marginBottom: '1rem',
            backgroundColor: '#FDFBF7',
            color: '#4A3F35'
          }}
        />
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '0.75rem 1.5rem',
            backgroundColor: '#A67C52',
            color: '#fff',
            borderRadius: '9999px',
            border: 'none'
          }}
        >
          Join the Waitlist
        </button>
      </form>
      <p style={{ fontSize: '0.875rem', color: '#9B8C78', marginTop: '1.5rem', textAlign: 'center' }}>
        The future of healing isn’t human or machine. It’s both.
      </p>
    </div>
  );
}