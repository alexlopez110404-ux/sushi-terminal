// Server-side proxy for CBOE delayed options data (avoids browser CORS limits).
module.exports = async (req, res) => {
  const symbol = String(req.query.symbol || 'QQQ').toUpperCase().replace(/[^A-Z0-9_]/g, '');
  try {
    const r = await fetch(`https://cdn.cboe.com/api/global/delayed_quotes/options/${symbol}.json`, {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    });
    if (!r.ok) return res.status(r.status).json({ error: 'upstream ' + r.status });
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=120');
    res.status(200).send(await r.text());
  } catch (e) {
    res.status(502).json({ error: String(e) });
  }
};
