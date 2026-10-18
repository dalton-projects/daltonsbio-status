# Status check trigger

A Cloudflare Worker, `daltonsbio-status-trigger` in the "Daltons Bio" account, that asks
GitHub to run the Upptime check (`.github/workflows/uptime.yml`) every five minutes.
GitHub's own schedule for that workflow did not fire reliably.

It has no web address. Its one secret, `GH_TOKEN`, is the same fine grained token as this
repository's `GH_PAT` (needs Actions: read and write here). Renew both together before
18 October 2027.

Deploy from this folder: `cf deploy` with `CLOUDFLARE_ACCOUNT_ID=c53e21ae787903252b7af3647f545daa`.
