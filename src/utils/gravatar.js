import md5 from "md5";

const gravatar = (email) => {
  const base = "https://es.gravatar.com/avatar/";
  const formattedEmail = email.trim().toLowerCase();
  const hash = md5(formattedEmail, {encoding: "binary"})

  return `${base}${hash}`
};

export {gravatar}