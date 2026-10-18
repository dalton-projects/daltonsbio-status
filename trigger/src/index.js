// Starts the Upptime check every five minutes. GitHub's own schedule for it is
// unreliable on this repository, so Cloudflare's scheduler asks GitHub to run it
// instead. Independent of Vercel, so it keeps checking while the site is down.
const DISPATCH = "https://api.github.com/repos/dalton-projects/daltonsbio-status/actions/workflows/uptime.yml/dispatches";

export default {
  async scheduled(_event, env, ctx) {
    ctx.waitUntil(
      fetch(DISPATCH, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${env.GH_TOKEN}`,
          Accept: "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28",
          "User-Agent": "daltonsbio-status-trigger",
        },
        body: JSON.stringify({ ref: "master" }),
      }).then((r) => {
        if (r.status !== 204) console.error(`dispatch-failed ${r.status}`);
      }),
    );
  },
};
