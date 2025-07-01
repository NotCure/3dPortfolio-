"use client";
import Link from "next/link";

import styles from "./BinaryGrid.module.css";

const cells = [
  { bin: "01110000 01110010", label: "Projects", href: "#" },
  { bin: "01101001 01101110", label: "About Me", href: "#" },
  { bin: "01100011 01101111", label: "Contact", href: "#" },
];

export default function BinaryGrid() {
  return (
    <div className={styles.matrix}>
      {cells.map((c, i) => (
        <Link
          key={i}
          href={c.href}
          className={styles.cell}
          data-label={c.label}
        >
          {c.bin}
        </Link>
      ))}
    </div>
  );
}
