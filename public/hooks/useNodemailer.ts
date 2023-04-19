import { MailData } from "../../types/MailData";

/**
 * @remarks - hook gets called when a user requests funds from another user. Hook sends a request to the server to send an email to the user who is being requested funds from. Hook gets called in ReviewTransfer component after user confirms inputs.
 * @param MailData - includes email, name, subject, message
 * @returns hook with a fetch request to the server to send an email to the user who is being requested funds from.
 */
const UseNodemailer = async (data: MailData) => {
  return await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json, text/plain, */*",
    },
    body: JSON.stringify(data),
  }).then((res) => {
    if (res.ok) {
      console.log("response ok");
      return res.json();
    } else {
      throw new Error("Failed to send message");
    }
  });
};

export default UseNodemailer;
