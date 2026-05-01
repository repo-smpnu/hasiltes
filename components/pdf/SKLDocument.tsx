import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer";
import { Applicant } from "@/lib/types";
import { SCHOOL_INFO, ACADEMIC_YEAR, PRINCIPAL_INFO } from "@/lib/constants";
import { formatDate } from "@/lib/utils";

// Register fonts for PDF
Font.register({
  family: "Inter",
  fonts: [
    {
      src: "https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff",
      fontWeight: 400,
    },
    {
      src: "https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYAZ9hiJ-Ek-_EeA.woff",
      fontWeight: 700,
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#ffffff",
    padding: 40,
    fontFamily: "Inter",
    fontSize: 11,
    color: "#151c27",
    position: "relative",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 3,
    borderBottomColor: "#005c55",
    borderBottomStyle: "solid",
    paddingBottom: 16,
    marginBottom: 20,
    gap: 16,
  },
  logo: {
    width: 70,
    height: 70,
  },
  headerCenter: {
    flex: 1,
    alignItems: "center",
    textAlign: "center",
  },
  headerFoundation: {
    fontSize: 10,
    fontWeight: 700,
    color: "#005c55",
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 2,
  },
  headerSchoolName: {
    fontSize: 18,
    fontWeight: 700,
    color: "#003d38",
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 3,
  },
  headerAccreditation: {
    fontSize: 9,
    color: "#4a5568",
    fontStyle: "italic",
    marginBottom: 2,
  },
  headerAddress: {
    fontSize: 9,
    color: "#4a5568",
  },
  titleSection: {
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 14,
    fontWeight: 700,
    color: "#005c55",
    textTransform: "uppercase",
    textDecoration: "underline",
    letterSpacing: 2,
    marginBottom: 4,
  },
  letterNumber: {
    fontSize: 10,
    color: "#4a5568",
  },
  bodyText: {
    fontSize: 11,
    lineHeight: 1.7,
    color: "#151c27",
    marginBottom: 12,
  },
  dataRow: {
    flexDirection: "row",
    marginBottom: 6,
    paddingHorizontal: 20,
  },
  dataLabel: {
    width: 160,
    fontSize: 11,
    fontWeight: 700,
    color: "#151c27",
  },
  dataColon: {
    width: 20,
    fontSize: 11,
    color: "#151c27",
  },
  dataValue: {
    flex: 1,
    fontSize: 11,
    color: "#151c27",
    textTransform: "uppercase",
    fontWeight: 700,
  },
  statusBox: {
    alignItems: "center",
    marginVertical: 20,
  },
  statusText: {
    backgroundColor: "#0f766e",
    color: "#a3faef",
    paddingVertical: 12,
    paddingHorizontal: 48,
    borderRadius: 2,
    fontSize: 28,
    fontWeight: 700,
    letterSpacing: 4,
  },
  closingText: {
    fontSize: 11,
    lineHeight: 1.7,
    color: "#4a5568",
    fontStyle: "italic",
    marginBottom: 24,
    marginLeft: 24,
  },
  signatureSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: 20,
  },
  qrSection: {
    alignItems: "center",
    width: 100,
  },
  qrImage: {
    width: 80,
    height: 80,
    marginBottom: 4,
  },
  qrLabel: {
    fontSize: 8,
    color: "#4a5568",
    textAlign: "center",
  },
  signatureBlock: {
    width: 200,
    alignItems: "center",
    textAlign: "center",
  },
  signatureCity: {
    fontSize: 11,
    color: "#151c27",
    marginBottom: 2,
    textAlign: "center",
  },
  signatureRole: {
    fontSize: 11,
    color: "#151c27",
    marginBottom: 56,
    textAlign: "center",
  },
  signatureImage: {
    width: 120,
    height: 48,
    marginBottom: 4,
    opacity: 0.85,
  },
  signatureName: {
    fontSize: 11,
    fontWeight: 700,
    color: "#003d38",
    textDecoration: "underline",
    marginBottom: 2,
    textAlign: "center",
  },
  signatureNip: {
    fontSize: 10,
    color: "#4a5568",
    textAlign: "center",
  },
  decoratorBottom: {
    position: "absolute",
    bottom: 16,
    left: 40,
    right: 40,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  decoratorLine: {
    flex: 1,
    height: 2,
    backgroundColor: "#ffb598",
  },
  decoratorAccent: {
    width: 8,
    height: 8,
    backgroundColor: "#005c55",
  },
  decoratorAccent2: {
    width: 8,
    height: 8,
    backgroundColor: "#7f4025",
  },
});

interface Props {
  applicant: Applicant;
  letterNumber: string;
  qrCodeDataUrl: string;
  signatureDataUrl: string;
  logoDataUrl: string;
}

// Factory function to create the PDF document element (avoids TS type issues with renderToBuffer)
export function buildSKLDocument(props: Props) {
  const { applicant, letterNumber, qrCodeDataUrl, signatureDataUrl, logoDataUrl } = props;
  const today = new Date();
  const dateStr = formatDate(today.toISOString());

  const dataRows: Array<{ label: string; value: string }> = [
    { label: "Nama Lengkap", value: applicant.full_name },
    ...(applicant.birth_place && applicant.birth_date
      ? [{ label: "Tempat, Tgl. Lahir", value: `${applicant.birth_place}, ${formatDate(applicant.birth_date)}` }]
      : []),
    ...(applicant.parent_name
      ? [{ label: "Nama Orang Tua/Wali", value: applicant.parent_name }]
      : []),
    { label: "Nomor Pendaftar", value: applicant.registration_number },
    { label: "NISN", value: applicant.nisn },
    { label: "Sekolah Asal", value: applicant.school_origin },
  ];

  return React.createElement(
    Document,
    {
      title: `Surat Keterangan Lulus - ${applicant.full_name}`,
      author: SCHOOL_INFO.name,
      subject: "Surat Keterangan Lulus",
    },
    React.createElement(
      Page,
      { size: "A4", style: styles.page },
      // Header
      React.createElement(
        View,
        { style: styles.header },
        logoDataUrl ? React.createElement(Image, { src: logoDataUrl, style: styles.logo }) : null,
        React.createElement(
          View,
          { style: styles.headerCenter },
          React.createElement(Text, { style: styles.headerFoundation }, SCHOOL_INFO.foundation),
          React.createElement(Text, { style: styles.headerSchoolName }, SCHOOL_INFO.name),
          React.createElement(Text, { style: styles.headerAccreditation }, SCHOOL_INFO.accreditation),
          React.createElement(Text, { style: styles.headerAddress }, `${SCHOOL_INFO.address} | Telp: ${SCHOOL_INFO.phone}`)
        )
      ),
      // Title
      React.createElement(
        View,
        { style: styles.titleSection },
        React.createElement(Text, { style: styles.title }, "Surat Keterangan Lulus"),
        React.createElement(Text, { style: styles.letterNumber }, `Nomor: ${letterNumber}`)
      ),
      // Opening
      React.createElement(
        Text,
        { style: styles.bodyText },
        `Kepala Sekolah Menengah Pertama (SMP) NU Assalafie dengan ini menerangkan bahwa:`
      ),
      // Data rows
      ...dataRows.map(({ label, value }) =>
        React.createElement(
          View,
          { style: styles.dataRow, key: label },
          React.createElement(Text, { style: styles.dataLabel }, label),
          React.createElement(Text, { style: styles.dataColon }, ":"),
          React.createElement(Text, { style: styles.dataValue }, value)
        )
      ),
      // Statement
      React.createElement(
        Text,
        { style: { ...styles.bodyText, marginTop: 16 } },
        `Berdasarkan hasil Rapat Pleno Dewan Guru Kelulusan Tahun Pelajaran ${ACADEMIC_YEAR}, nama yang tersebut di atas dinyatakan:`
      ),
      // Status
      React.createElement(
        View,
        { style: styles.statusBox },
        React.createElement(Text, { style: styles.statusText }, "LULUS")
      ),
      // Closing
      React.createElement(
        Text,
        { style: styles.closingText },
        "Surat keterangan ini bersifat sementara sampai diterbitkannya Ijazah asli dari instansi terkait. Surat ini dapat dipergunakan untuk keperluan pendaftaran ke jenjang pendidikan selanjutnya."
      ),
      // Signature & QR
      React.createElement(
        View,
        { style: styles.signatureSection },
        React.createElement(
          View,
          { style: styles.qrSection },
          qrCodeDataUrl
            ? React.createElement(Image, { src: qrCodeDataUrl, style: styles.qrImage })
            : null,
          React.createElement(Text, { style: styles.qrLabel }, "Scan untuk Verifikasi Online")
        ),
        React.createElement(
          View,
          { style: styles.signatureBlock },
          React.createElement(Text, { style: styles.signatureCity }, `${PRINCIPAL_INFO.city}, ${dateStr}`),
          React.createElement(Text, { style: styles.signatureRole }, "Kepala Sekolah,"),
          signatureDataUrl
            ? React.createElement(Image, { src: signatureDataUrl, style: styles.signatureImage })
            : null,
          React.createElement(Text, { style: styles.signatureName }, PRINCIPAL_INFO.name),
          React.createElement(Text, { style: styles.signatureNip }, `NIP. ${PRINCIPAL_INFO.nip}`)
        )
      ),
      // Decorator bottom
      React.createElement(
        View,
        { style: styles.decoratorBottom },
        React.createElement(View, { style: styles.decoratorLine }),
        React.createElement(View, { style: styles.decoratorAccent }),
        React.createElement(View, { style: styles.decoratorAccent2 })
      )
    )
  );
}

// Named export alias for compatibility
export const SKLDocument = buildSKLDocument;
