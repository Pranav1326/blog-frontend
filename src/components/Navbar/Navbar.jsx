import React, { useState } from 'react';
import './navbar.css';
import {
    Link
} from "react-router-dom";
import { useSelector } from 'react-redux';

const Navbar = ({searchQuery, setSearchQuery}) => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const user = useSelector(state => state.userReducer.user);

    return (
        <nav className="navigation">
            <Link to='/' className='brand-name'>
                {/* BLOG Logo */}
                <svg width="135" height="45" viewBox="0 0 135 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_493_1979)">
                    <path d="M2.03409 38V3.09091H16.0114C18.5795 3.09091 20.7216 3.47159 22.4375 4.23295C24.1534 4.99432 25.4432 6.05114 26.3068 7.40341C27.1705 8.74432 27.6023 10.2898 27.6023 12.0398C27.6023 13.4034 27.3295 14.6023 26.7841 15.6364C26.2386 16.6591 25.4886 17.5 24.5341 18.1591C23.5909 18.8068 22.5114 19.267 21.2955 19.5398V19.8807C22.625 19.9375 23.8693 20.3125 25.0284 21.0057C26.1989 21.6989 27.1477 22.6705 27.875 23.9205C28.6023 25.1591 28.9659 26.6364 28.9659 28.3523C28.9659 30.2045 28.5057 31.858 27.5852 33.3125C26.6761 34.7557 25.3295 35.8977 23.5455 36.7386C21.7614 37.5795 19.5625 38 16.9489 38H2.03409ZM9.41477 31.9659H15.4318C17.4886 31.9659 18.9886 31.5739 19.9318 30.7898C20.875 29.9943 21.3466 28.9375 21.3466 27.6193C21.3466 26.6534 21.1136 25.8011 20.6477 25.0625C20.1818 24.3239 19.517 23.7443 18.6534 23.3239C17.8011 22.9034 16.7841 22.6932 15.6023 22.6932H9.41477V31.9659ZM9.41477 17.6989H14.8864C15.8977 17.6989 16.7955 17.5227 17.5795 17.1705C18.375 16.8068 19 16.2955 19.4545 15.6364C19.9205 14.9773 20.1534 14.1875 20.1534 13.267C20.1534 12.0057 19.7045 10.9886 18.8068 10.2159C17.9205 9.44318 16.6591 9.05682 15.0227 9.05682H9.41477V17.6989ZM33.7685 38V3.09091H41.1491V31.9148H56.1151V38H33.7685ZM91.723 20.5455C91.723 24.3523 91.0014 27.5909 89.5582 30.2614C88.1264 32.9318 86.1719 34.9716 83.6946 36.3807C81.2287 37.7784 78.456 38.4773 75.3764 38.4773C72.2741 38.4773 69.4901 37.7727 67.0241 36.3636C64.5582 34.9545 62.6094 32.9148 61.1776 30.2443C59.7457 27.5739 59.0298 24.3409 59.0298 20.5455C59.0298 16.7386 59.7457 13.5 61.1776 10.8295C62.6094 8.15909 64.5582 6.125 67.0241 4.72727C69.4901 3.31818 72.2741 2.61364 75.3764 2.61364C78.456 2.61364 81.2287 3.31818 83.6946 4.72727C86.1719 6.125 88.1264 8.15909 89.5582 10.8295C91.0014 13.5 91.723 16.7386 91.723 20.5455ZM84.2401 20.5455C84.2401 18.0795 83.8707 16 83.1321 14.3068C82.4048 12.6136 81.3764 11.3295 80.0469 10.4545C78.7173 9.57955 77.1605 9.14205 75.3764 9.14205C73.5923 9.14205 72.0355 9.57955 70.706 10.4545C69.3764 11.3295 68.3423 12.6136 67.6037 14.3068C66.8764 16 66.5128 18.0795 66.5128 20.5455C66.5128 23.0114 66.8764 25.0909 67.6037 26.7841C68.3423 28.4773 69.3764 29.7614 70.706 30.6364C72.0355 31.5114 73.5923 31.9489 75.3764 31.9489C77.1605 31.9489 78.7173 31.5114 80.0469 30.6364C81.3764 29.7614 82.4048 28.4773 83.1321 26.7841C83.8707 25.0909 84.2401 23.0114 84.2401 20.5455ZM120.338 14.375C120.099 13.5455 119.764 12.8125 119.332 12.1761C118.901 11.5284 118.372 10.983 117.747 10.5398C117.134 10.0852 116.429 9.73864 115.634 9.5C114.849 9.26136 113.98 9.14205 113.026 9.14205C111.241 9.14205 109.673 9.58523 108.321 10.4716C106.98 11.358 105.935 12.6477 105.185 14.3409C104.435 16.0227 104.06 18.0795 104.06 20.5114C104.06 22.9432 104.429 25.0114 105.168 26.7159C105.906 28.4205 106.952 29.7216 108.304 30.6193C109.656 31.5057 111.253 31.9489 113.094 31.9489C114.764 31.9489 116.19 31.6534 117.372 31.0625C118.565 30.4602 119.474 29.6136 120.099 28.5227C120.736 27.4318 121.054 26.142 121.054 24.6534L122.554 24.875H113.554V19.3182H128.162V23.7159C128.162 26.7841 127.514 29.4205 126.219 31.625C124.923 33.8182 123.139 35.5114 120.866 36.7045C118.594 37.8864 115.991 38.4773 113.06 38.4773C109.787 38.4773 106.912 37.7557 104.435 36.3125C101.957 34.858 100.026 32.7955 98.6392 30.125C97.2642 27.4432 96.5767 24.2614 96.5767 20.5795C96.5767 17.75 96.9858 15.2273 97.804 13.0114C98.6335 10.7841 99.7926 8.89773 101.281 7.35227C102.77 5.80682 104.503 4.63068 106.48 3.82386C108.457 3.01704 110.599 2.61364 112.906 2.61364C114.884 2.61364 116.724 2.90341 118.429 3.48295C120.134 4.05114 121.645 4.85795 122.963 5.90341C124.293 6.94886 125.378 8.19318 126.219 9.63636C127.06 11.0682 127.599 12.6477 127.838 14.375H120.338Z" fill="white"/>
                    <path d="M2.03409 38H0.534091V39.5H2.03409V38ZM2.03409 3.09091V1.59091H0.534091V3.09091H2.03409ZM22.4375 4.23295L21.8291 5.60405L21.8291 5.60405L22.4375 4.23295ZM26.3068 7.40341L25.0426 8.21079L25.0457 8.21562L26.3068 7.40341ZM26.7841 15.6364L28.1076 16.3423L28.1108 16.3362L26.7841 15.6364ZM24.5341 18.1591L25.3833 19.3956L25.3864 19.3934L24.5341 18.1591ZM21.2955 19.5398L20.9672 18.0761L19.7955 18.339V19.5398H21.2955ZM21.2955 19.8807H19.7955V21.3179L21.2314 21.3793L21.2955 19.8807ZM25.0284 21.0057L24.2585 22.293L24.2641 22.2963L25.0284 21.0057ZM27.875 23.9205L26.5785 24.6748L26.5815 24.6799L27.875 23.9205ZM27.5852 33.3125L26.3177 32.5104L26.316 32.513L27.5852 33.3125ZM23.5455 36.7386L22.9059 35.3818L22.9059 35.3818L23.5455 36.7386ZM9.41477 31.9659H7.91477V33.4659H9.41477V31.9659ZM19.9318 30.7898L20.8908 31.9433L20.8989 31.9364L19.9318 30.7898ZM20.6477 25.0625L19.379 25.8628L19.379 25.8628L20.6477 25.0625ZM18.6534 23.3239L17.9898 24.6691L17.9968 24.6725L18.6534 23.3239ZM9.41477 22.6932V21.1932H7.91477V22.6932H9.41477ZM9.41477 17.6989H7.91477V19.1989H9.41477V17.6989ZM17.5795 17.1705L18.1943 18.5387L18.2032 18.5347L17.5795 17.1705ZM19.4545 15.6364L18.2297 14.7705L18.2247 14.7776L18.2197 14.7848L19.4545 15.6364ZM18.8068 10.2159L17.8211 11.3466L17.8283 11.3528L18.8068 10.2159ZM9.41477 9.05682V7.55682H7.91477V9.05682H9.41477ZM3.53409 38V3.09091H0.534091V38H3.53409ZM2.03409 4.59091H16.0114V1.59091H2.03409V4.59091ZM16.0114 4.59091C18.4425 4.59091 20.3615 4.95285 21.8291 5.60405L23.0459 2.86186C21.0817 1.99033 18.7166 1.59091 16.0114 1.59091V4.59091ZM21.8291 5.60405C23.3226 6.26671 24.363 7.14659 25.0426 8.21078L27.571 6.59603C26.5234 4.95568 24.9842 3.72192 23.0459 2.86186L21.8291 5.60405ZM25.0457 8.21562C25.7384 9.29101 26.1023 10.5488 26.1023 12.0398H29.1023C29.1023 10.0308 28.6025 8.19762 27.5679 6.59119L25.0457 8.21562ZM26.1023 12.0398C26.1023 13.2002 25.8714 14.1515 25.4573 14.9365L28.1108 16.3362C28.7876 15.0531 29.1023 13.6066 29.1023 12.0398H26.1023ZM25.4606 14.9305C25.0279 15.7418 24.4395 16.4016 23.6818 16.9247L25.3864 19.3934C26.5378 18.5984 27.4494 17.5764 28.1076 16.3422L25.4606 14.9305ZM23.6849 16.9226C22.9128 17.4528 22.0133 17.8415 20.9672 18.0761L21.6237 21.0034C23.0095 20.6926 24.269 20.1608 25.3833 19.3956L23.6849 16.9226ZM19.7955 19.5398V19.8807H22.7955V19.5398H19.7955ZM21.2314 21.3793C22.3079 21.4253 23.3102 21.7259 24.2585 22.293L25.7983 19.7183C24.4285 18.8991 22.9421 18.4497 21.3595 18.382L21.2314 21.3793ZM24.2641 22.2963C25.2003 22.8508 25.9715 23.6316 26.5785 24.6748L29.1715 23.1661C28.3239 21.7093 27.1974 20.5469 25.7928 19.715L24.2641 22.2963ZM26.5815 24.6799C27.1494 25.6471 27.4659 26.8512 27.4659 28.3523H30.4659C30.4659 26.4215 30.0552 24.671 29.1685 23.161L26.5815 24.6799ZM27.4659 28.3523C27.4659 29.9431 27.0747 31.3142 26.3177 32.5104L28.8528 34.1146C29.9367 32.4017 30.4659 30.466 30.4659 28.3523H27.4659ZM26.316 32.513C25.5821 33.6782 24.4726 34.6434 22.9059 35.3818L24.185 38.0955C26.1865 37.1521 27.7702 35.8331 28.8544 34.112L26.316 32.513ZM22.9059 35.3818C21.3758 36.103 19.41 36.5 16.9489 36.5V39.5C19.715 39.5 22.1469 39.0561 24.185 38.0955L22.9059 35.3818ZM16.9489 36.5H2.03409V39.5H16.9489V36.5ZM9.41477 33.4659H15.4318V30.4659H9.41477V33.4659ZM15.4318 33.4659C17.621 33.4659 19.5481 33.0594 20.8907 31.9432L18.9729 29.6363C18.4291 30.0884 17.3563 30.4659 15.4318 30.4659V33.4659ZM20.8989 31.9364C22.2055 30.8345 22.8466 29.3451 22.8466 27.6193H19.8466C19.8466 28.5299 19.5445 29.1542 18.9648 29.6431L20.8989 31.9364ZM22.8466 27.6193C22.8466 26.4012 22.5492 25.2654 21.9164 24.2622L19.379 25.8628C19.6781 26.3368 19.8466 26.9056 19.8466 27.6193H22.8466ZM21.9164 24.2622C21.2868 23.2641 20.3988 22.5053 19.31 21.9752L17.9968 24.6725C18.6353 24.9834 19.0768 25.3836 19.379 25.8628L21.9164 24.2622ZM19.317 21.9787C18.2143 21.4346 16.9594 21.1932 15.6023 21.1932V24.1932C16.6087 24.1932 17.388 24.3722 17.9898 24.6691L19.317 21.9787ZM15.6023 21.1932H9.41477V24.1932H15.6023V21.1932ZM7.91477 22.6932V31.9659H10.9148V22.6932H7.91477ZM9.41477 19.1989H14.8864V16.1989H9.41477V19.1989ZM14.8864 19.1989C16.0726 19.1989 17.1858 18.9918 18.1943 18.5387L16.9648 15.8022C16.4052 16.0536 15.7228 16.1989 14.8864 16.1989V19.1989ZM18.2032 18.5347C19.2214 18.0692 20.0671 17.3903 20.6894 16.488L18.2197 14.7848C17.9329 15.2006 17.5286 15.5444 16.9559 15.8062L18.2032 18.5347ZM20.6794 16.5022C21.3487 15.5554 21.6534 14.4525 21.6534 13.267H18.6534C18.6534 13.9225 18.4922 14.3992 18.2297 14.7705L20.6794 16.5022ZM21.6534 13.267C21.6534 11.6011 21.0378 10.1571 19.7854 9.07906L17.8283 11.3528C18.3713 11.8202 18.6534 12.4103 18.6534 13.267H21.6534ZM19.7925 9.08525C18.5425 7.99546 16.88 7.55682 15.0227 7.55682V10.5568C16.4382 10.5568 17.2984 10.8909 17.8211 11.3466L19.7925 9.08525ZM15.0227 7.55682H9.41477V10.5568H15.0227V7.55682ZM7.91477 9.05682V17.6989H10.9148V9.05682H7.91477ZM33.7685 38H32.2685V39.5H33.7685V38ZM33.7685 3.09091V1.59091H32.2685V3.09091H33.7685ZM41.1491 3.09091H42.6491V1.59091H41.1491V3.09091ZM41.1491 31.9148H39.6491V33.4148H41.1491V31.9148ZM56.1151 31.9148H57.6151V30.4148H56.1151V31.9148ZM56.1151 38V39.5H57.6151V38H56.1151ZM35.2685 38V3.09091H32.2685V38H35.2685ZM33.7685 4.59091H41.1491V1.59091H33.7685V4.59091ZM39.6491 3.09091V31.9148H42.6491V3.09091H39.6491ZM41.1491 33.4148H56.1151V30.4148H41.1491V33.4148ZM54.6151 31.9148V38H57.6151V31.9148H54.6151ZM56.1151 36.5H33.7685V39.5H56.1151V36.5ZM89.5582 30.2614L88.2386 29.5482L88.2363 29.5526L89.5582 30.2614ZM83.6946 36.3807L84.4343 37.6856L84.4362 37.6845L83.6946 36.3807ZM67.0241 36.3636L67.7684 35.0613L67.0241 36.3636ZM61.1776 30.2443L59.8556 30.9531L59.8556 30.9531L61.1776 30.2443ZM61.1776 10.8295L62.4995 11.5383L62.4995 11.5383L61.1776 10.8295ZM67.0241 4.72727L67.7638 6.03223L67.7684 6.02964L67.0241 4.72727ZM83.6946 4.72727L82.9504 6.02966L82.9575 6.03368L83.6946 4.72727ZM89.5582 10.8295L88.2363 11.5383L88.2386 11.5427L89.5582 10.8295ZM83.1321 14.3068L81.7538 14.8988L81.7572 14.9066L83.1321 14.3068ZM80.0469 10.4545L79.2223 11.7075L79.2223 11.7075L80.0469 10.4545ZM70.706 10.4545L71.5306 11.7075L71.5306 11.7075L70.706 10.4545ZM67.6037 14.3068L66.2288 13.707L66.2255 13.7148L67.6037 14.3068ZM67.6037 26.7841L66.2254 27.3761L66.2288 27.3839L67.6037 26.7841ZM70.706 30.6364L71.5306 29.3834L71.5306 29.3834L70.706 30.6364ZM80.0469 30.6364L79.2223 29.3834L79.2223 29.3834L80.0469 30.6364ZM83.1321 26.7841L81.7572 26.1843L81.7539 26.1921L83.1321 26.7841ZM90.223 20.5455C90.223 24.1654 89.537 27.1456 88.2386 29.5482L90.8779 30.9745C92.4658 28.0362 93.223 24.5392 93.223 20.5455H90.223ZM88.2363 29.5526C86.9292 31.9904 85.1689 33.8164 82.953 35.0768L84.4362 37.6845C87.1749 36.1268 89.3237 33.8732 90.8802 30.9702L88.2363 29.5526ZM82.9549 35.0757C80.7338 36.3347 78.2198 36.9773 75.3764 36.9773V39.9773C78.6922 39.9773 81.7236 39.2221 84.4343 37.6856L82.9549 35.0757ZM75.3764 36.9773C72.5104 36.9773 69.987 36.3291 67.7684 35.0613L66.2799 37.666C68.9931 39.2164 72.0379 39.9773 75.3764 39.9773V36.9773ZM67.7684 35.0613C65.5635 33.8013 63.8076 31.9751 62.4995 29.5355L59.8556 30.9531C61.4112 33.8544 63.553 36.1078 66.2799 37.666L67.7684 35.0613ZM62.4995 29.5355C61.2105 27.1313 60.5298 24.1549 60.5298 20.5455H57.5298C57.5298 24.5269 58.281 28.0164 59.8556 30.9531L62.4995 29.5355ZM60.5298 20.5455C60.5298 16.9238 61.2108 13.9419 62.4995 11.5383L59.8556 10.1207C58.2807 13.0581 57.5298 16.5535 57.5298 20.5455H60.5298ZM62.4995 11.5383C63.8071 9.09963 65.5616 7.28048 67.7638 6.03222L66.2845 3.42233C63.5549 4.96951 61.4117 7.21855 59.8556 10.1207L62.4995 11.5383ZM67.7684 6.02964C69.987 4.76182 72.5104 4.11364 75.3764 4.11364V1.11364C72.0379 1.11364 68.9931 1.87454 66.2799 3.42491L67.7684 6.02964ZM75.3764 4.11364C78.2176 4.11364 80.73 4.76086 82.9504 6.02964L84.4388 3.42491C81.7273 1.8755 78.6943 1.11364 75.3764 1.11364V4.11364ZM82.9575 6.03368C85.1707 7.28243 86.9297 9.1014 88.2363 11.5383L90.8802 10.1207C89.3232 7.21678 87.173 4.96757 84.4317 3.42087L82.9575 6.03368ZM88.2386 11.5427C89.537 13.9453 90.223 16.9255 90.223 20.5455H93.223C93.223 16.5517 92.4658 13.0547 90.8779 10.1164L88.2386 11.5427ZM85.7401 20.5455C85.7401 17.9386 85.3508 15.6414 84.507 13.707L81.7572 14.9066C82.3907 16.3586 82.7401 18.2205 82.7401 20.5455H85.7401ZM84.5103 13.7148C83.6859 11.7955 82.4832 10.2622 80.8715 9.20155L79.2223 11.7075C80.2697 12.3969 81.1237 13.4318 81.7539 14.8988L84.5103 13.7148ZM80.8715 9.20155C79.2682 8.14638 77.417 7.64205 75.3764 7.64205V10.642C76.9041 10.642 78.1665 11.0127 79.2223 11.7075L80.8715 9.20155ZM75.3764 7.64205C73.3359 7.64205 71.4847 8.14638 69.8813 9.20155L71.5306 11.7075C72.5864 11.0127 73.8488 10.642 75.3764 10.642V7.64205ZM69.8813 9.20155C68.2719 10.2607 67.0646 11.7912 66.2288 13.707L68.9786 14.9066C69.6201 13.4361 70.4809 12.3983 71.5306 11.7075L69.8813 9.20155ZM66.2255 13.7148C65.3956 15.6468 65.0128 17.9411 65.0128 20.5455H68.0128C68.0128 18.218 68.3572 16.3532 68.9819 14.8988L66.2255 13.7148ZM65.0128 20.5455C65.0128 23.1498 65.3956 25.4441 66.2255 27.3761L68.9819 26.1921C68.3572 24.7377 68.0128 22.8729 68.0128 20.5455H65.0128ZM66.2288 27.3839C67.0646 29.2997 68.2719 30.8302 69.8813 31.8894L71.5306 29.3834C70.4809 28.6926 69.6201 27.6548 68.9786 26.1843L66.2288 27.3839ZM69.8813 31.8894C71.4847 32.9445 73.3359 33.4489 75.3764 33.4489V30.4489C73.8488 30.4489 72.5864 30.0782 71.5306 29.3834L69.8813 31.8894ZM75.3764 33.4489C77.417 33.4489 79.2682 32.9445 80.8715 31.8894L79.2223 29.3834C78.1665 30.0782 76.9041 30.4489 75.3764 30.4489V33.4489ZM80.8715 31.8894C82.4832 30.8287 83.6859 29.2954 84.5103 27.3761L81.7539 26.1921C81.1237 27.6591 80.2697 28.694 79.2223 29.3834L80.8715 31.8894ZM84.507 27.3839C85.3508 25.4495 85.7401 23.1523 85.7401 20.5455H82.7401C82.7401 22.8704 82.3907 24.7323 81.7572 26.1843L84.507 27.3839ZM120.338 14.375L118.897 14.7897L119.209 15.875H120.338V14.375ZM119.332 12.1761L118.084 13.0082L118.091 13.0184L119.332 12.1761ZM117.747 10.5398L116.854 11.7451L116.867 11.7544L116.88 11.7634L117.747 10.5398ZM115.634 9.5L115.197 10.935L115.203 10.9367L115.634 9.5ZM108.321 10.4716L107.499 9.21705L107.494 9.22026L108.321 10.4716ZM105.185 14.3409L106.555 14.9518L106.556 14.9484L105.185 14.3409ZM108.304 30.6193L107.474 31.869L107.482 31.8738L108.304 30.6193ZM117.372 31.0625L118.043 32.4042L118.048 32.4016L117.372 31.0625ZM120.099 28.5227L118.804 27.7669L118.798 27.7771L120.099 28.5227ZM121.054 24.6534L121.273 23.1695L119.554 22.9155V24.6534H121.054ZM122.554 24.875V26.375L122.773 23.3911L122.554 24.875ZM113.554 24.875H112.054V26.375H113.554V24.875ZM113.554 19.3182V17.8182H112.054V19.3182H113.554ZM128.162 19.3182H129.662V17.8182H128.162V19.3182ZM126.219 31.625L127.51 32.3879L127.512 32.3849L126.219 31.625ZM120.866 36.7045L121.559 38.0354L121.564 38.0326L120.866 36.7045ZM104.435 36.3125L103.675 37.606L103.68 37.6086L104.435 36.3125ZM98.6392 30.125L97.3044 30.8094L97.3079 30.8161L98.6392 30.125ZM97.804 13.0114L96.3983 12.4878L96.3968 12.4918L97.804 13.0114ZM101.281 7.35227L102.362 8.39289L102.362 8.39289L101.281 7.35227ZM106.48 3.82386L105.913 2.43503L105.913 2.43503L106.48 3.82386ZM118.429 3.48295L117.946 4.90314L117.955 4.90598L118.429 3.48295ZM122.963 5.90341L122.031 7.07867L122.036 7.08254L122.963 5.90341ZM126.219 9.63636L124.923 10.3915L124.925 10.396L126.219 9.63636ZM127.838 14.375V15.875H129.56L129.324 14.1697L127.838 14.375ZM121.78 13.9603C121.502 12.997 121.104 12.1163 120.574 11.3339L118.091 13.0184C118.424 13.5087 118.696 14.0939 118.897 14.7897L121.78 13.9603ZM120.58 11.3441C120.049 10.5462 119.392 9.86723 118.615 9.31617L116.88 11.7634C117.352 12.0987 117.753 12.5106 118.084 13.0082L120.58 11.3441ZM118.64 9.33444C117.875 8.76796 117.012 8.34738 116.065 8.06326L115.203 10.9367C115.846 11.1299 116.392 11.4025 116.854 11.7451L118.64 9.33444ZM116.07 8.06499C115.124 7.77685 114.104 7.64205 113.026 7.64205V10.642C113.856 10.642 114.575 10.7459 115.197 10.935L116.07 8.06499ZM113.026 7.64205C110.981 7.64205 109.12 8.15416 107.499 9.21706L109.143 11.7261C110.226 11.0163 111.502 10.642 113.026 10.642V7.64205ZM107.494 9.22026C105.879 10.2877 104.661 11.8188 103.813 13.7334L106.556 14.9484C107.208 13.4766 108.081 12.4282 109.148 11.7229L107.494 9.22026ZM103.815 13.73C102.956 15.6552 102.56 17.9333 102.56 20.5114H105.56C105.56 18.2258 105.913 16.3903 106.555 14.9518L103.815 13.73ZM102.56 20.5114C102.56 23.0879 102.95 25.371 103.791 27.3123L106.544 26.1195C105.908 24.6517 105.56 22.7985 105.56 20.5114H102.56ZM103.791 27.3123C104.628 29.2434 105.847 30.7887 107.474 31.869L109.134 29.3696C108.056 28.6545 107.184 27.5975 106.544 26.1195L103.791 27.3123ZM107.482 31.8738C109.111 32.9418 111.002 33.4489 113.094 33.4489V30.4489C111.503 30.4489 110.202 30.0696 109.126 29.3648L107.482 31.8738ZM113.094 33.4489C114.937 33.4489 116.605 33.123 118.043 32.4041L116.701 29.7209C115.775 30.1838 114.591 30.4489 113.094 30.4489V33.4489ZM118.048 32.4016C119.486 31.6758 120.621 30.6304 121.401 29.2684L118.798 27.7771C118.328 28.5968 117.645 29.2447 116.696 29.7234L118.048 32.4016ZM121.395 29.2785C122.187 27.9202 122.554 26.3598 122.554 24.6534H119.554C119.554 25.9243 119.284 26.9435 118.804 27.7669L121.395 29.2785ZM120.835 26.1373L122.335 26.3589L122.773 23.3911L121.273 23.1695L120.835 26.1373ZM122.554 23.375H113.554V26.375H122.554V23.375ZM115.054 24.875V19.3182H112.054V24.875H115.054ZM113.554 20.8182H128.162V17.8182H113.554V20.8182ZM126.662 19.3182V23.7159H129.662V19.3182H126.662ZM126.662 23.7159C126.662 26.5704 126.061 28.933 124.926 30.8651L127.512 32.3849C128.968 29.9079 129.662 26.9977 129.662 23.7159H126.662ZM124.927 30.8621C123.775 32.8134 122.197 34.3118 120.169 35.3764L121.564 38.0326C124.081 36.711 126.072 34.823 127.51 32.3879L124.927 30.8621ZM120.174 35.3737C118.145 36.4293 115.786 36.9773 113.06 36.9773V39.9773C116.197 39.9773 119.043 39.3435 121.559 38.0354L120.174 35.3737ZM113.06 36.9773C110.014 36.9773 107.407 36.308 105.19 35.0164L103.68 37.6086C106.417 39.2033 109.56 39.9773 113.06 39.9773V36.9773ZM105.194 35.019C102.972 33.7144 101.233 31.8662 99.9705 29.4339L97.3079 30.8161C98.8179 33.7247 100.943 36.0015 103.675 37.606L105.194 35.019ZM99.974 29.4406C98.729 27.0125 98.0767 24.0754 98.0767 20.5795H95.0767C95.0767 24.4473 95.7994 27.8739 97.3044 30.8094L99.974 29.4406ZM98.0767 20.5795C98.0767 17.8932 98.4652 15.5512 99.2111 13.5309L96.3968 12.4918C95.5064 14.9033 95.0767 17.6068 95.0767 20.5795H98.0767ZM99.2096 13.5349C99.9751 11.4796 101.03 9.7749 102.362 8.39289L100.201 6.31166C98.5548 8.02055 97.2919 10.0885 96.3983 12.4878L99.2096 13.5349ZM102.362 8.39289C103.706 6.99729 105.264 5.94012 107.047 5.21269L105.913 2.43503C103.742 3.32124 101.834 4.61635 100.201 6.31166L102.362 8.39289ZM107.047 5.21269C108.83 4.485 110.778 4.11364 112.906 4.11364V1.11364C110.421 1.11364 108.085 1.54909 105.913 2.43503L107.047 5.21269ZM112.906 4.11364C114.735 4.11364 116.412 4.38137 117.946 4.90311L118.912 2.0628C117.037 1.42545 115.032 1.11364 112.906 1.11364V4.11364ZM117.955 4.90598C119.505 5.42265 120.859 6.14902 122.031 7.07865L123.895 4.72816C122.431 3.56688 120.762 2.67962 118.903 2.05993L117.955 4.90598ZM122.036 7.08254C123.219 8.01268 124.178 9.11374 124.923 10.3915L127.515 8.88119C126.578 7.27262 125.366 5.88505 123.89 4.72428L122.036 7.08254ZM124.925 10.396C125.661 11.649 126.139 13.0387 126.352 14.5803L129.324 14.1697C129.06 12.2568 128.458 10.4873 127.512 8.87673L124.925 10.396ZM127.838 12.875H120.338V15.875H127.838V12.875Z" fill="url(#paint0_linear_493_1979)"/>
                    </g>
                    <defs>
                    <filter id="filter0_d_493_1979" x="0.0340576" y="0.613636" width="134.128" height="43.8636" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dx="2" dy="2"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.27451 0 0 0 0 0.435294 0 0 0 1 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_1979"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_1979" result="shape"/>
                    </filter>
                    <linearGradient id="paint0_linear_493_1979" x1="-1" y1="-8" x2="130.324" y2="51.4921" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#008888"/>
                    <stop offset="1" stopColor="#00466F"/>
                    </linearGradient>
                    </defs>
                </svg>
            </Link>
            <button
                className="hamburger"
                onClick={() => {
                setIsNavExpanded(!isNavExpanded)
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    width="24" height="24"
                    viewBox="0 0 24 24">
                    <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"></path>
                </svg>
            </button>
            <div className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
                <ul>
                    <li className='search-box'>
                        <div className="search">
                            <form action="/" method='post' onSubmit={e => e.preventDefault()}>
                                <input 
                                    type="text" 
                                    name="search" 
                                    id="search" 
                                    value={searchQuery}
                                    onInput={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Search Posts"
                                />
                            </form>
                        </div>
                    </li>
                    <li>
                        <Link to='/about'>
                            About
                        </Link>
                    </li>
                    {/* { !user ? <li>
                        <Link to='/login'>
                            Login
                        </Link>
                    </li> :  */}
                    {/* // <> */}
                        {/* <div className='loggedIn'>
                            <Link to='/profile'>
                                <img src={user?.profilepic ? user.profilepic : "https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png"} alt="User" className='user-nav-img'/>
                            </Link>
                        </div>  */}
                    {/* </> */}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;