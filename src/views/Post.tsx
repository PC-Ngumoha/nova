import {} from 'react';
import { useParams } from 'react-router-dom';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { TfiCommentAlt } from 'react-icons/tfi';
import { BsBookmarkPlus, BsBookmarkCheck } from 'react-icons/bs';

import { NewsletterSignup } from '@/components';
import rocket from '@/assets/images/spacex_rocket.jpg';
import thyrone from '@/assets/images/thyrone_adebayo.jpg';
import classNames from '@/views/styles/Post.module.scss';

const feedbackOptions = [
  {
    id: 1,
    icon: FaRegHeart,
    altIcon: FaHeart,
  },
  {
    id: 2,
    icon: TfiCommentAlt,
  },
  {
    id: 3,
    icon: BsBookmarkPlus,
    altIcon: BsBookmarkCheck,
  },
];

const Post = () => {
  const { postID } = useParams();
  console.log(postID);

  return (
    <main className={classNames.page}>
      {/* Main content */}
      <section className={classNames.post}>
        <img src={rocket} />
        <div className={classNames.meta}>
          <span className={classNames.title}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </span>
          <div className={classNames.author}>
            <img src={thyrone} />
            <span>Thyrone Adebayo</span>
          </div>
          <span className={classNames.date}>December 14, 2024</span>
        </div>
        <div className={classNames.body}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu
          vulputate enim, ac interdum lacus. Phasellus sollicitudin vulputate
          lacus id rhoncus. Duis ac nibh nisl. Ut iaculis tortor at velit
          fermentum ultrices. Donec ante orci, pulvinar vel ornare sed,
          scelerisque at dolor. Proin cursus, tellus ut pellentesque placerat,
          purus neque semper arcu, id aliquet massa tellus eget quam.
          Pellentesque bibendum nisi lacus, a maximus sapien faucibus eget. Cras
          eu urna nec ante laoreet imperdiet eu id dui. Quisque id scelerisque
          velit, sed accumsan sapien. Ut placerat mi neque, a varius nisl
          iaculis eu.
          <br />
          Aliquam ut ipsum non elit molestie dapibus eget in quam. Curabitur sed
          tellus vulputate, auctor quam nec, mattis tortor. Etiam vitae blandit
          leo, in tempor nisl. Aliquam nec lorem ut lectus iaculis imperdiet non
          eget erat. Nunc tempus faucibus rutrum. Pellentesque scelerisque sem
          ac porttitor suscipit. Sed venenatis eros sem, eget hendrerit metus
          aliquam at.
          <br />
          Suspendisse potenti. Ut pretium quis dui ut condimentum. Mauris non
          enim quis nisl lacinia vulputate. Nunc luctus lectus quis ipsum
          varius, nec lacinia massa commodo. Sed et nisl lectus. Suspendisse
          lobortis faucibus dui, vel fringilla nunc luctus at. Aliquam maximus,
          nunc quis elementum ultricies, purus nunc lobortis est, eu eleifend
          turpis erat ut lacus.
          <br />
          Aliquam ut magna ut turpis porttitor egestas eu eget quam. Curabitur
          quis vehicula turpis. Nulla non mi placerat, malesuada est sed,
          interdum lacus. Praesent gravida convallis leo aliquet aliquet. In
          eget elementum nunc. Ut scelerisque imperdiet tellus aliquet
          consectetur. Ut a magna ante. In malesuada quis lorem at aliquet.
          Aliquam pretium egestas turpis quis congue. Sed fermentum purus at
          commodo scelerisque. Nullam vitae placerat sapien, sit amet ultrices
          risus. Sed commodo quis ipsum in hendrerit. Aliquam a rhoncus mauris,
          a placerat lacus. In mattis eros in pulvinar condimentum. Sed lorem
          mi, euismod sit amet tellus at, sagittis vehicula orci.
          <br />
          Cras pulvinar nisi ut velit ultrices rhoncus. In faucibus tellus eu
          nibh ultricies, id tempus ligula sodales. Vivamus sodales, tortor eu
          efficitur consectetur, lacus lacus commodo justo, ac fringilla odio
          libero non libero. Phasellus vestibulum nulla sed rutrum ultrices.
          Nunc et posuere nibh. Donec lorem nibh, porta non aliquam vitae,
          consequat aliquet lectus. Fusce dictum efficitur maximus. Nullam
          lobortis interdum vestibulum. Vestibulum dictum commodo vulputate.
          Praesent bibendum metus ut tortor efficitur auctor. Fusce vitae
          tristique tellus, id laoreet purus.
          <br />
        </div>
      </section>
      {/* Like, comment or add to wishlist */}
      <div className={classNames.feedback}>
        {feedbackOptions.map((option) => (
          <button key={option.id}>
            <option.icon />
          </button>
        ))}
      </div>
      <NewsletterSignup authorName='Thyrone Adebayo' />
      <section className={classNames.writtenBy}>
        <span>Written By</span>
        <hr />
        <div className={classNames.author}>
          <div className={classNames.heading}>
            <img src={thyrone} />
            <span>Thyrone Adebayo</span>
          </div>
          <div className={classNames.bio}>
            <span className={classNames.occupation}>Researcher</span>
            <span className={classNames.institution}>NASRDA</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Post;
