const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold gradient-text">WG</span>
            <span className="text-primary text-2xl">.</span>
          </div>
          
          <p className="text-muted-foreground text-sm text-center">
            © {currentYear} Whallyson Gabriel. Todos os direitos reservados.
          </p>

          <p className="text-muted-foreground text-sm font-mono">
            {'<'}Feito com <span className="text-primary">♥</span> e dados{'>'}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
