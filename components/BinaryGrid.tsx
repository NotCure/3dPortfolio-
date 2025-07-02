"use client";
import Link from "next/link";
import styles from "./BinaryGrid.module.css";

function generateBinaryString(length: number): string {
  return Array.from({ length }, () => (Math.random() > 0.5 ? "1" : "0")).join(
    ""
  );
}
type Props = {
  setScreen: (screen: string) => void;
};
export default function BinaryGrid({ setScreen }: Props) {
  const binaryElements = [
    [generateBinaryString(46)],
    [
      generateBinaryString(11),
      <span
        key="home"
        className={styles.linkCell}
        data-label="Home"
        onClick={() => setScreen("home")}
      >
        0111000001110010
      </span>,
      generateBinaryString(19),
    ],
    [generateBinaryString(46)],
    [generateBinaryString(46)],

    [
      generateBinaryString(4),
      <span
        key="about"
        className={styles.linkCell}
        data-label="About Me"
        onClick={() => setScreen("about")}
        style={{
          textDecorationColor: "#007ae8",
          ["--label-color" as any]: "#007ae8",
        }}
      >
        0110100101101110
      </span>,
      generateBinaryString(26),
    ],
    [generateBinaryString(46)],
    [generateBinaryString(46)],

    [
      generateBinaryString(26),
      <span
        key="contact"
        className={styles.linkCell}
        data-label="Contact"
        onClick={() => setScreen("contact")}
        style={{
          textDecorationColor: "#e80050",
          ["--label-color" as any]: "#e80050",
        }}
      >
        0110001101101111
      </span>,
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
