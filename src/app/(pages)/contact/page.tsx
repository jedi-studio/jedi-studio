const ContactPage = () => {
  return (
    <div className="ContactPage flex flex-col justify-center">
      <h2 className="title">Contact</h2>
      <div className="flex flex-col gap-2">
        <span className="font-bold">Email:</span> support@jedi-studio.com
        <span className="font-bold">Discord:</span> <a href="https://discord.gg/2JyqPFvSzQ">Server Invite Link</a>
      </div>
    </div>
  );
};

export default ContactPage;
