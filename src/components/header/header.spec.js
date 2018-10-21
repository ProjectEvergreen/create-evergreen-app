import './header.js';

describe('Header Component', () => {
  let header;

  beforeEach(async () => {
    header = document.createElement('eve-header');

    document.body.appendChild(header);

    await header.updateComplete;
  });

  afterEach(() => {
    header = null;
  });

  describe('Default Behavior', () => {
    
    it('should have a greeting', () => { 
      const greeting = header.shadowRoot.querySelectorAll('header h1')[0];

      expect(greeting.innerHTML).toBe('Welcome to Create Evergreen App!');
    });

    it('should have a logo', () => { 
      const logo = header.shadowRoot.querySelectorAll('header img')[0];

      expect(logo.src).toBeDefined();
      expect(logo.alt).toBeDefined();
    });

    it('should have a link to the project website', () => { 
      const link = header.shadowRoot.querySelectorAll('header a')[0];

      expect(link.href).toBe('https://projectevergreen.github.io/');
    });
  });

});