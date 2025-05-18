
import React from "react";
import { Document, Page, Text, View, StyleSheet, Image, pdf } from "@react-pdf/renderer";
import { saveAs } from "file-saver";

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
    backgroundColor: "#ffffff",
    fontFamily: "Helvetica",
  },
  section: {
    margin: 10,
    padding: 10,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold",
    color: "#2563eb",
    textAlign: "center",
  },
  subheader: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: "bold",
    color: "#2563eb",
  },
  text: {
    fontSize: 12,
    marginBottom: 10,
    lineHeight: 1.5,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 20,
  },
  statBox: {
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: "#f1f5f9",
    borderRadius: 5,
    alignItems: "center",
    flex: 1,
  },
  statValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2563eb",
  },
  statLabel: {
    fontSize: 10,
    color: "#64748b",
  },
  footer: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    fontSize: 10,
    textAlign: "center",
    color: "#64748b",
  },
  timelineItem: {
    marginBottom: 15,
    paddingLeft: 20,
    borderLeftWidth: 2,
    borderLeftColor: "#2563eb",
    borderLeftStyle: "solid",
  },
  contactInfo: {
    marginTop: 30,
    fontSize: 10,
    color: "#64748b",
    textAlign: "center",
  },
  takeaway: {
    marginBottom: 15,
  },
  takeawayNumber: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#2563eb",
  },
  takeawayTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
  },
});

// Create Document Component
const CaseStudyPDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Cover Page */}
      <View style={[styles.section, { marginTop: 100 }]}>
        <Text style={[styles.header, { fontSize: 28 }]}>Instagram Growth Campaign</Text>
        <Text style={[styles.header, { marginTop: -10 }]}>Case Study: WEE2</Text>
        <Text style={[styles.text, { textAlign: "center", marginTop: 20, fontSize: 14 }]}>
          From Awareness to Leads — How I Boosted Reach by 220% for a PR & Digital Brand
        </Text>
        <Text style={[styles.text, { textAlign: "center", marginTop: 40, fontSize: 14, fontWeight: "bold" }]}>
          By Yash Suthar
        </Text>
        <Text style={[styles.text, { textAlign: "center", fontSize: 12 }]}>
          Social Media Manager & Digital Marketing Specialist
        </Text>
      </View>

      <View style={styles.footer}>
        <Text>© 2025 Yash Suthar | capturewithyxsh@gmail.com | +91 9561713120</Text>
      </View>
    </Page>

    <Page size="A4" style={styles.page}>
      {/* About WEE2 */}
      <View style={styles.section}>
        <Text style={styles.header}>Project Overview</Text>
        <Text style={styles.subheader}>About WEE2</Text>
        <Text style={styles.text}>
          WEE2 is a PR & Digital Marketing agency specializing in helping startups and small businesses establish their online presence. The brand needed to grow its Instagram following to attract more qualified leads and establish authority in the digital marketing space.
        </Text>
        <Text style={styles.text}>
          As the Social Media Manager and Digital Marketing Specialist, I was tasked with developing and implementing a comprehensive Instagram growth strategy that would significantly increase brand awareness and generate quality leads.
        </Text>

        <Text style={[styles.subheader, { marginTop: 20 }]}>My Role & Tools</Text>
        <Text style={styles.text}>
          <Text style={{ fontWeight: "bold" }}>Role: </Text>
          Strategy, Content Creation, Paid Ads, Analytics
        </Text>
        <Text style={styles.text}>
          <Text style={{ fontWeight: "bold" }}>Tools Used: </Text>
          Canva, CapCut, Meta Ads, Google Analytics, Hootsuite, Sprout Social
        </Text>
      </View>

      {/* Campaign Objectives */}
      <View style={styles.section}>
        <Text style={styles.subheader}>Campaign Objectives</Text>
        <View style={[styles.timelineItem]}>
          <Text style={[styles.text, { fontWeight: "bold" }]}>Grow Reach by 200%</Text>
          <Text style={styles.text}>Increase audience reach through organic and paid strategies</Text>
        </View>
        <View style={[styles.timelineItem]}>
          <Text style={[styles.text, { fontWeight: "bold" }]}>Generate Qualified Leads</Text>
          <Text style={styles.text}>Increase direct messages from potential clients</Text>
        </View>
        <View style={[styles.timelineItem]}>
          <Text style={[styles.text, { fontWeight: "bold" }]}>Build Visual Branding</Text>
          <Text style={styles.text}>Establish a consistent and recognizable visual identity</Text>
        </View>
        <View style={[styles.timelineItem]}>
          <Text style={[styles.text, { fontWeight: "bold" }]}>Improve Engagement</Text>
          <Text style={styles.text}>Increase likes, comments, shares, and saves</Text>
        </View>
      </View>
      
      <View style={styles.footer}>
        <Text>© 2025 Yash Suthar | capturewithyxsh@gmail.com | +91 9561713120</Text>
      </View>
    </Page>

    <Page size="A4" style={styles.page}>
      {/* Strategy Breakdown */}
      <View style={styles.section}>
        <Text style={styles.header}>Strategy Breakdown</Text>
        
        <View style={[styles.timelineItem]}>
          <Text style={[styles.text, { fontWeight: "bold" }]}>Content Calendar</Text>
          <Text style={styles.text}>Implemented a structured content calendar with 5 posts per week, balanced across educational, promotional, and engagement content.</Text>
        </View>

        <View style={[styles.timelineItem]}>
          <Text style={[styles.text, { fontWeight: "bold" }]}>Reels Strategy</Text>
          <Text style={styles.text}>Created short-form video content using trending audio and topics, optimized for the Instagram algorithm to maximize organic reach.</Text>
        </View>

        <View style={[styles.timelineItem]}>
          <Text style={[styles.text, { fontWeight: "bold" }]}>Hashtag Strategy</Text>
          <Text style={styles.text}>Developed a combination of branded hashtags and trending industry hashtags to improve discoverability and reach.</Text>
        </View>

        <View style={[styles.timelineItem]}>
          <Text style={[styles.text, { fontWeight: "bold" }]}>Paid Advertising</Text>
          <Text style={styles.text}>Implemented targeted Instagram ads with strategic CTA buttons (Send Message, Learn More) to drive qualified traffic and generate leads.</Text>
        </View>

        <View style={[styles.timelineItem]}>
          <Text style={[styles.text, { fontWeight: "bold" }]}>Analytics & Optimization</Text>
          <Text style={styles.text}>Established a weekly review cycle to analyze performance metrics and refine strategy based on data-driven insights.</Text>
        </View>

        {/* Campaign Results */}
        <Text style={[styles.subheader, { marginTop: 30 }]}>Campaign Results</Text>
        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>750+</Text>
            <Text style={styles.statLabel}>New Followers</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>45K+</Text>
            <Text style={styles.statLabel}>Total Reach</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>2.3K</Text>
            <Text style={styles.statLabel}>Post Interactions</Text>
          </View>
        </View>
        <View style={[styles.statsContainer, { marginTop: 0 }]}>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>110</Text>
            <Text style={styles.statLabel}>Leads via DM</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>+220%</Text>
            <Text style={styles.statLabel}>Story Engagement</Text>
          </View>
        </View>
      </View>
      
      <View style={styles.footer}>
        <Text>© 2025 Yash Suthar | capturewithyxsh@gmail.com | +91 9561713120</Text>
      </View>
    </Page>

    <Page size="A4" style={styles.page}>
      {/* Key Takeaways */}
      <View style={styles.section}>
        <Text style={styles.header}>Key Takeaways</Text>
        
        <View style={styles.takeaway}>
          <Text style={styles.takeawayNumber}>01</Text>
          <Text style={styles.takeawayTitle}>Reels Triggered Virality</Text>
          <Text style={styles.text}>Reels consistently outperformed static posts, with a particular spike in reach when aligned with trending audio. This format was pivotal in reaching new audiences and driving overall account growth.</Text>
        </View>
        
        <View style={styles.takeaway}>
          <Text style={styles.takeawayNumber}>02</Text>
          <Text style={styles.takeawayTitle}>Carousel + CTA = Lead Magnet</Text>
          <Text style={styles.text}>Carousel posts with educational content and a clear call-to-action generated the highest number of direct message inquiries, proving to be the most effective format for lead generation.</Text>
        </View>
        
        <View style={styles.takeaway}>
          <Text style={styles.takeawayNumber}>03</Text>
          <Text style={styles.takeawayTitle}>Consistency Drove Engagement</Text>
          <Text style={styles.text}>The consistent posting schedule of 5 posts per week created a predictable pattern for followers, resulting in increased engagement rates and higher retention of new followers.</Text>
        </View>

        {/* Testimonial */}
        <Text style={[styles.subheader, { marginTop: 30 }]}>Client Testimonial</Text>
        <Text style={[styles.text, { fontStyle: "italic" }]}>
          "Yash's Instagram strategy completely transformed our digital presence. Not only did we see significant growth in followers, but the quality of leads coming through our DMs has been exceptional. His approach to content strategy and paid advertising delivered results that exceeded our expectations."
        </Text>
        <Text style={[styles.text, { fontWeight: "bold", marginTop: 10 }]}>- Rouchelle Dabrel, CEO of WEE2</Text>
      </View>

      {/* Contact Information */}
      <View style={styles.contactInfo}>
        <Text style={{ fontWeight: "bold", fontSize: 12, marginBottom: 5 }}>Yash Suthar</Text>
        <Text>Social Media Manager & Digital Marketing Specialist</Text>
        <Text>capturewithyxsh@gmail.com | +91 9561713120</Text>
        <Text>LinkedIn: linkedin.com/in/yash-suthar-9834ba354/</Text>
        <Text>Instagram: instagram.com/iyashrs/</Text>
        <Text>Portfolio: sanatbhatt.my.canva.site/yashsutharportfolio/</Text>
      </View>
      
      <View style={styles.footer}>
        <Text>© 2025 Yash Suthar | All Rights Reserved</Text>
      </View>
    </Page>
  </Document>
);

export const generatePDF = async () => {
  const blob = await pdf(<CaseStudyPDF />).toBlob();
  saveAs(blob, "WEE2-Instagram-Growth-Case-Study-Yash-Suthar.pdf");
};

const PDFGenerator = () => {
  return null; // This component doesn't render anything, just exports the PDF generation function
};

export default PDFGenerator;
