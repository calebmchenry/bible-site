import React from 'react';
import { Link } from 'gatsby';
import style from './footer.module.css';

export default function footer() {
  return (
    <footer className={style.footer}>
      <div className={style.top}>
        <ul>
          <li>
            <Link className="no-decoration" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="no-decoration" to="/articles/">
              Articles
            </Link>
          </li>
          <li>
            <Link className="no-decoration" to="/charts/">
              Charts
            </Link>
          </li>
          <li>
            <Link className="no-decoration" to="/audio/">
              Audio
            </Link>
          </li>
        </ul>
      </div>
      <div className={style.bottom}>
        <span>
          <em>I am doing this to build my faith</em>
        </span>
      </div>
    </footer>
  );
}
