"use client";
import Link from "next/link";
import styles from "./BinaryGrid.module.css";

function generateBinaryString(length: number): string {
  return Array.from({ length }, () => (Math.random() > 0.5 ? "1" : "0")).join(
    ""
  );
}

const binaryElements = [
  [generateBinaryString(46)],
  [
    generateBinaryString(11),

    <Link
      key="about"
      href="#"
      className={styles.linkCell}
      data-label="About Me"
      style={{
        textDecorationColor: "#007ae8",
        ["--label-color" as any]: "#007ae8",
      }}
    >
      0111000001110010
    </Link>,
    generateBinaryString(19),
  ],
  [generateBinaryString(46)],
  [generateBinaryString(46)],

  [
    generateBinaryString(4),
    <Link
      key="about"
      href="#"
      className={styles.linkCell}
      data-label="About Me"
    >
      0110100101101110
    </Link>,
    generateBinaryString(26),
  ],
  [generateBinaryString(46)],
  [generateBinaryString(46)],

  [
    generateBinaryString(26),
    <Link
      key="contact"
      href="#"
      className={styles.linkCell}
      data-label="Contact"
      style={{
        textDecorationColor: "#e80050",
        ["--label-color" as any]: "#e80050",
      }}
    >
      0110001101101111
    </Link>,
    generateBinaryString(4),
  ],
  [generateBinaryString(46)],
  [generateBinaryString(46)],
  [generateBinaryString(46)],
  [generateBinaryString(46)],
  [generateBinaryString(46)],
  [generateBinaryString(46)],
  [generateBinaryString(46)],
];

export default function BinaryGrid() {
  return (
    <div className={styles.matrix}>
      {binaryElements.map((line, i) => (
        <div key={i} className={styles.line}>
          {line.map((part, j) =>
            typeof part === "string" ? (
              <span key={`bin-${j}`} className={styles.cell}>
                {part}
              </span>
            ) : (
              part
            )
          )}
        </div>
      ))}
    </div>
  );
}
