import alfy from "alfy";

const mdnBaseUrl = "https://developer.mozilla.org";
const maxAge = 30 * 60 * 1000;

const items = await alfy.fetch(
  `${mdnBaseUrl}/api/v1/search?locale=ja&q=${alfy.input}`,
  {
    maxAge,
    transform: (body) =>
      body.documents.map(({ title, summary, mdn_url }) => {
        const url = `${mdnBaseUrl}${mdn_url}`;
        return {
          title,
          subtitle: summary,
          autoComplete: title,
          arg: url,
          quicklookurl: url,
        };
      }),
  }
);
alfy.output(items);
