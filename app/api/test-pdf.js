const { renderToBuffer } = require("@react-pdf/renderer");
const React = require("react");
const { buildSKLDocument } = require("../../components/pdf/SKLDocument");

async function testPdf() {
  try {
    const applicant = {
      id: "123",
      full_name: "Test User",
      nisn: "3143992531",
      registration_number: "REG-123",
      school_origin: "SMP X",
      status: "LULUS",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    const doc = buildSKLDocument({
      applicant,
      letterNumber: "123/SKL/2026",
      qrCodeDataUrl: "",
      signatureDataUrl: "",
      logoDataUrl: ""
    });

    const buffer = await renderToBuffer(doc);
    console.log("PDF generated successfully, size:", buffer.length);
  } catch (err) {
    console.error("Error generating PDF:", err);
  }
}

testPdf();
