const DrinksLayout = ({ children }) => {
  return (
    <div className="max-w-xl">
      <div className="mockup-code  mb-8">
        <pre data-prefix="$">
          <code> npx create next Js app </code>
        </pre>
      </div>

      {children}
    </div>
  );
};

export default DrinksLayout;
