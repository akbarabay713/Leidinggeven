'use client'

import Typography from '@/src/components/atoms/Typography/Typography';
import React from 'react';
import { useTranslation } from "react-i18next";
import s from './ChallengesSection.module.scss'
import { Button } from '@/src/components/atoms/Button/Button';
import cn from 'classnames';
// interface ChallengesTemplateProps {
//   title: string;
//   subtitle: string;
//   ctaText: string;
//   onCtaClick: () => void;
// }

const ChallengesSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className={s.challenges}>
      <div className={cn(s.challengesContainer)}>

              <Typography variant="futuraH3Bold" component='h2' className={s.challengesTitle}>
                {t("HERKEN JE DEZE UITDAGINGEN? DAN PAST ONZE TRAINING BIJ ZOU")}
                <br/>
                <Typography component='span' variant="futuraH3Bold">{t("GEBASEERD OP EEN KRACHTIGE 8-STAPPENMODEL")}</Typography>
              </Typography>

              <ul>
                <li>
                <Typography variant="futuraH1Bold" component='h1' className={s.challengesTitle}>
                {t("HERKEN JE DEZE UITDAGINGEN? DAN PAST ONZE TRAINING BIJ ZOU")}
              </Typography>
                </li>
              </ul>

              <div className={s.challengesButtons}>
                <Button variant={'primaryOutline'} size={'xl'}>{t('KENNISMAKING PLANNEN')}</Button>
                <Button variant={'outlineColor'} size={'xl'}>{t('KENNISMAKING PLANNEN')}</Button>
              </div>
      
      </div>
    </section>
  );
};

export default ChallengesSection;