import React from 'react';
import { Link } from 'react-router-dom';
import { sideLinks } from '../models/data';
import ReactTooltip from 'react-tooltip';

function SideLinks() {
  return (
    <div className="fixed right-0 z-50">
      <ul className="">
        {sideLinks?.map((link) => (
          <li
            key={link?.id}
            data-tip={link?.name}
            data-delay-hide="1000"
            className={
              'flex justify-between items-center w-40 h-14 px-4 mr-[-100px] hover:ml-[-90px] hover:rounded-md duration-300' +
              ' ' +
              link?.style
            }
          >
            <a
              href={link?.to}
              download={link?.download}
              className={
                'flex flex-row-reverse justify-between items-center w-full text-white'
              }
              target={link?.download ? '_blank' : ''}
              rel="noreferrer"
            >
              <>
                {link?.name} {link?.icon}
              </>
            </a>
          </li>
        ))}
      </ul>
      {/* <ReactTooltip
        className=""
        delayHide={1000}
        backgroundColor="transparent"
        textColor="gray"
        effect="solid"
      /> */}
    </div>
  );
}

export default SideLinks;
