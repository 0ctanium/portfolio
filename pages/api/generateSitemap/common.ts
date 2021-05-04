import { NextApiHandler } from 'next';
import { exec } from 'child_process';
import fs from 'fs';

const generateCommonSitemap: NextApiHandler = async (req, res) => {
  try {
    fs.unlinkSync('./public/sitemap.xml');
  } catch (e) {}

  require('@next/env').loadEnvConfig(
    process.cwd(),
    process.env.NODE_ENV === 'development'
  );

  // Load cli
  // console.log(require('@octanium/next-sitemap/dist/cjs/cli'));

  res.status(203).json({ success: true });

  exec(`node node_modules/@octanium/next-sitemap/dist/cjs/cli.js`, (err) => {
    if (err) {
      throw err;
    } else {
      res.status(203).json({ success: true });
    }
  });
};

export default generateCommonSitemap;
