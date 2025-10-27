export const MoreInformation = () => {
  return (
    <div className="my-40">
      <img className="mb-12"
        src="/images/illustration-stay-productive.png"
        alt="illustration stay productive"
      />
      <h2 className="font-bold mb-4">Stay productive, wherever you are</h2>
      <p className="text-sm mb-4">
        Never let location be an issue when accessing your files. Fylo has you
        covered for all of your file storage needs.
      </p>
      <p className="text-sm mb-4">
        Securely share files and folders with friends, family and colleagues for
        live collaboration. No email attachments required.
      </p>
      <a href="#" className="text-teal-200 items-center flex gap-2">
        <p>See how Fylo works</p>
        <img src="/images/icon-arrow.svg" alt="icon rrow.svg" />
      </a>
    </div>
  );
};
