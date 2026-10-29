# GEX Desk – deploy

1. Install Node.js, then:  npm i -g vercel
2. In this folder run:     vercel      (log in, accept defaults)
3. Run `vercel --prod` for the final URL. Optional: add your own domain in the Vercel dashboard.

index.html = the app, api/cboe.js = server-side proxy for CBOE data (no pasting needed).
Rename the brand/title by editing "GEX DESK" and <title> in index.html.

TradingView: add gex_levels.pine as a new indicator, then paste the COPY LEVELS
string from the page into its "Levels" input (once per day).
