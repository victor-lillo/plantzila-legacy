import React from 'react'
import CardSvgPicker from '@components/CardSvgPicker'
import { SvgList } from '@types'
import styles from './CardItem.module.scss'

export default function CardItem({ svg, url, children }: { svg: SvgList; url: string; children: React.ReactNode }) {
  return (
    <a rel='noopener noreferrer' target='_blank' href={url}>
      <section className={styles.container}>
        <div className={styles.icon}>
          <CardSvgPicker svgName={svg} />
        </div>
        <p className={styles.text}>{children}</p>
      </section>
    </a>
  )
}
