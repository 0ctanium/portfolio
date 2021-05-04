import { NextApiHandler } from 'next';
import { exec } from 'child_process';
import fs from 'fs';

const generateCommonSitemap: NextApiHandler = async (req, res) => {
  try {
    fs.unlinkSync('./public/sitemap.xml');
  } catch (e) {}

  exec('next-sitemap', (err) => {
    if (err) {
      throw err;
    } else {
      res.status(203).json({ success: true });
    }
  });
};

export default generateCommonSitemap;
