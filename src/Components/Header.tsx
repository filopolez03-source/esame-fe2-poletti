type HeaderProps = {
  logoText: string;
  buttonLabel: string;
  onButtonClick: () => void;
};

const Header = ({ logoText, buttonLabel, onButtonClick }: HeaderProps) => {
  return (
    <header className="header">
      <div className="header__brand">{logoText}</div>
      <nav className="header__nav">
        <a
          href="#button"
          onClick={(e) => {
            e.preventDefault();
            onButtonClick();
          }}
        >
          {buttonLabel}
        </a>
      </nav>
    </header>
  );
};

export default Header;
