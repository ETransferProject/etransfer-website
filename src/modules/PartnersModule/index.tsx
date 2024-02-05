import { IPartnersModule } from '@/types/modules/partnersModule';
import clsx from 'clsx';
import styles from './style.module.scss';
import CommonImage from '@/components/CommonImage';
import { s3Url } from '@/constants/network';
import useGetVertical from '@/hooks/useGetVertical';

interface IPartnersModuleProps {
  module: IPartnersModule;
}

export default function PartnersModule({ module }: IPartnersModuleProps) {
  const { title, list, commonStyles } = module;
  const { paddingVertical } = commonStyles;
  const { getVertical } = useGetVertical();
  return (
    <section
      className={clsx(['section-container', styles.partnersModuleWrap])}
      style={{
        backgroundColor: module.commonStyles?.defaultBackgroundColor,
        paddingTop: paddingVertical ? getVertical(paddingVertical) + 'px' : 'auto',
        paddingBottom: paddingVertical ? getVertical(paddingVertical) + 'px' : 'auto',
      }}>
      <section className={styles.content}>
        <h1 className={styles.sectionTitle}>{title?.text}</h1>
        <div className={styles.partnersList}>
          {list?.map((item, index) => {
            return (
              <div
                key={index}
                className={styles.partnerItem}
                style={{ backgroundColor: commonStyles.defaultCardBackgroundColor }}
                onClick={() => {
                  item.url && window.open(item.url);
                }}>
                <CommonImage
                  width={200}
                  height={50}
                  src={item.logoImage?.filename_disk ? s3Url + item.logoImage?.filename_disk : ''}
                  className={styles.cardImg}
                  alt="partnerImage"
                  layout="intrinsic"
                  priority
                />
              </div>
            );
          })}
        </div>
      </section>
    </section>
  );
}
