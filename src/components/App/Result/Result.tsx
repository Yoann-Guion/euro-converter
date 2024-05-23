import './Result.scss';

interface ResultProps {
  description: string;
  convertedValue: number;
}

function Result({ description, convertedValue }: ResultProps) {
  return (
    <footer className="footer">
      <h2 className="footer-title">{convertedValue}</h2>
      <p className="footer-p">{description}</p>
    </footer>
  );
}

export default Result;
