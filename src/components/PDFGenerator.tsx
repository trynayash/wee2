
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
  roadmapPhase: {
    marginBottom: 20,
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#f1f5f9",
  },
  roadmapPhaseTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2563eb",
    marginBottom: 10,
  },
  bulletPoint: {
    marginBottom: 5,
    paddingLeft: 10,
  },
});

// Case Study PDF Component
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

// Roadmap PDF Component
const RoadmapPDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Cover Page */}
      <View style={[styles.section, { marginTop: 100 }]}>
        <Text style={[styles.header, { fontSize: 28 }]}>Digital Marketing Roadmap</Text>
        <Text style={[styles.header, { marginTop: -10 }]}>For Social Media Growth</Text>
        <Text style={[styles.text, { textAlign: "center", marginTop: 20, fontSize: 14 }]}>
          A Strategic Framework for Building Brand Presence on Instagram
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
      {/* Introduction */}
      <View style={styles.section}>
        <Text style={styles.header}>Introduction</Text>
        <Text style={styles.text}>
          This roadmap outlines a comprehensive strategy for growing a brand's Instagram presence and converting followers into leads. The approach is divided into four key phases, each building on the previous to create a sustainable system for social media growth and lead generation.
        </Text>
        
        <Text style={[styles.subheader, { marginTop: 20 }]}>Who This Roadmap Is For</Text>
        <Text style={styles.text}>
          • PR and Digital Marketing agencies looking to grow their client base
        </Text>
        <Text style={styles.text}>
          • Small to medium businesses wanting to establish social authority
        </Text>
        <Text style={styles.text}>
          • Startups seeking to build brand awareness through social media
        </Text>
        <Text style={styles.text}>
          • Marketing professionals looking to improve their social media strategies
        </Text>
      </View>

      {/* Roadmap Phases */}
      <View style={styles.section}>
        <Text style={styles.subheader}>Roadmap Overview</Text>
        <Text style={styles.text}>
          The roadmap is structured in four progressive phases, each lasting approximately one month. Each phase focuses on specific goals while building on previous achievements.
        </Text>
      </View>
      
      <View style={styles.footer}>
        <Text>© 2025 Yash Suthar | capturewithyxsh@gmail.com | +91 9561713120</Text>
      </View>
    </Page>

    <Page size="A4" style={styles.page}>
      {/* Phase 1 */}
      <View style={styles.section}>
        <Text style={styles.header}>Phase 1: Foundation & Brand Identity</Text>
        
        <View style={styles.roadmapPhase}>
          <Text style={styles.roadmapPhaseTitle}>Month 1: Setting Up for Success</Text>
          
          <View style={styles.bulletPoint}>
            <Text style={[styles.text, { fontWeight: "bold" }]}>Audience Research</Text>
            <Text style={styles.text}>
              • Conduct comprehensive audience analysis to identify demographics and interests
            </Text>
            <Text style={styles.text}>
              • Research competitors and identify gaps in their social media strategy
            </Text>
            <Text style={styles.text}>
              • Create audience personas to guide content creation
            </Text>
          </View>
          
          <View style={styles.bulletPoint}>
            <Text style={[styles.text, { fontWeight: "bold" }]}>Visual Identity Development</Text>
            <Text style={styles.text}>
              • Create a consistent color palette and visual style for all posts
            </Text>
            <Text style={styles.text}>
              • Develop post templates for different content categories
            </Text>
            <Text style={styles.text}>
              • Design a profile layout with optimized bio and highlights
            </Text>
          </View>
          
          <View style={styles.bulletPoint}>
            <Text style={[styles.text, { fontWeight: "bold" }]}>Content Strategy</Text>
            <Text style={styles.text}>
              • Establish content pillars (educational, promotional, behind-the-scenes)
            </Text>
            <Text style={styles.text}>
              • Create a content calendar with 5 posts per week
            </Text>
            <Text style={styles.text}>
              • Develop a hashtag strategy with branded and discovery tags
            </Text>
          </View>
        </View>
        
        <Text style={[styles.text, { marginTop: 20, fontWeight: "bold" }]}>Key Deliverables:</Text>
        <Text style={styles.text}>
          • Brand style guide for Instagram
        </Text>
        <Text style={styles.text}>
          • Content calendar for first month
        </Text>
        <Text style={styles.text}>
          • Set of post templates
        </Text>
        <Text style={styles.text}>
          • Hashtag strategy document
        </Text>
      </View>
      
      <View style={styles.footer}>
        <Text>© 2025 Yash Suthar | capturewithyxsh@gmail.com | +91 9561713120</Text>
      </View>
    </Page>

    <Page size="A4" style={styles.page}>
      {/* Phase 2 */}
      <View style={styles.section}>
        <Text style={styles.header}>Phase 2: Engagement & Community Building</Text>
        
        <View style={styles.roadmapPhase}>
          <Text style={styles.roadmapPhaseTitle}>Month 2: Building Relationships</Text>
          
          <View style={styles.bulletPoint}>
            <Text style={[styles.text, { fontWeight: "bold" }]}>Engagement Strategy</Text>
            <Text style={styles.text}>
              • Implement daily engagement schedule (30 minutes per day)
            </Text>
            <Text style={styles.text}>
              • Engage with industry hashtags and accounts
            </Text>
            <Text style={styles.text}>
              • Respond to all comments and DMs within 3 hours
            </Text>
          </View>
          
          <View style={styles.bulletPoint}>
            <Text style={[styles.text, { fontWeight: "bold" }]}>Content Optimization</Text>
            <Text style={styles.text}>
              • Analyze first month's content performance
            </Text>
            <Text style={styles.text}>
              • Double down on high-performing content types
            </Text>
            <Text style={styles.text}>
              • Experiment with posting times to identify optimal schedule
            </Text>
          </View>
          
          <View style={styles.bulletPoint}>
            <Text style={[styles.text, { fontWeight: "bold" }]}>Story & Reel Integration</Text>
            <Text style={styles.text}>
              • Launch daily story series (tips, behind-the-scenes, Q&A)
            </Text>
            <Text style={styles.text}>
              • Create 3 Reels per week using trending audio
            </Text>
            <Text style={styles.text}>
              • Use interactive story stickers to boost engagement
            </Text>
          </View>
        </View>
        
        <Text style={[styles.text, { marginTop: 20, fontWeight: "bold" }]}>Key Deliverables:</Text>
        <Text style={styles.text}>
          • Daily engagement tracker
        </Text>
        <Text style={styles.text}>
          • Content performance report
        </Text>
        <Text style={styles.text}>
          • Reels content strategy
        </Text>
        <Text style={styles.text}>
          • Interactive story templates
        </Text>
      </View>
      
      <View style={styles.footer}>
        <Text>© 2025 Yash Suthar | capturewithyxsh@gmail.com | +91 9561713120</Text>
      </View>
    </Page>

    <Page size="A4" style={styles.page}>
      {/* Phase 3 */}
      <View style={styles.section}>
        <Text style={styles.header}>Phase 3: Scaling & Paid Strategy</Text>
        
        <View style={styles.roadmapPhase}>
          <Text style={styles.roadmapPhaseTitle}>Month 3: Accelerating Growth</Text>
          
          <View style={styles.bulletPoint}>
            <Text style={[styles.text, { fontWeight: "bold" }]}>Paid Advertising</Text>
            <Text style={styles.text}>
              • Launch targeted Instagram ads with strategic CTA buttons
            </Text>
            <Text style={styles.text}>
              • Create custom audiences based on website visitors and engagement
            </Text>
            <Text style={styles.text}>
              • Test different ad formats (carousel, single image, video)
            </Text>
          </View>
          
          <View style={styles.bulletPoint}>
            <Text style={[styles.text, { fontWeight: "bold" }]}>Collaborations</Text>
            <Text style={styles.text}>
              • Identify and reach out to potential collaboration partners
            </Text>
            <Text style={styles.text}>
              • Organize Instagram Lives with industry influencers
            </Text>
            <Text style={styles.text}>
              • Participate in engagement pods with complementary brands
            </Text>
          </View>
          
          <View style={styles.bulletPoint}>
            <Text style={[styles.text, { fontWeight: "bold" }]}>Lead Magnet Creation</Text>
            <Text style={styles.text}>
              • Develop downloadable resources for lead generation
            </Text>
            <Text style={styles.text}>
              • Create landing pages for Instagram traffic
            </Text>
            <Text style={styles.text}>
              • Set up email nurture sequences for captured leads
            </Text>
          </View>
        </View>
        
        <Text style={[styles.text, { marginTop: 20, fontWeight: "bold" }]}>Key Deliverables:</Text>
        <Text style={styles.text}>
          • Instagram ad campaign structure
        </Text>
        <Text style={styles.text}>
          • Collaboration outreach template
        </Text>
        <Text style={styles.text}>
          • Lead magnet resources
        </Text>
        <Text style={styles.text}>
          • Landing page design
        </Text>
      </View>
      
      <View style={styles.footer}>
        <Text>© 2025 Yash Suthar | capturewithyxsh@gmail.com | +91 9561713120</Text>
      </View>
    </Page>

    <Page size="A4" style={styles.page}>
      {/* Phase 4 */}
      <View style={styles.section}>
        <Text style={styles.header}>Phase 4: Analytics & Optimization</Text>
        
        <View style={styles.roadmapPhase}>
          <Text style={styles.roadmapPhaseTitle}>Month 4: Refining the System</Text>
          
          <View style={styles.bulletPoint}>
            <Text style={[styles.text, { fontWeight: "bold" }]}>Performance Analysis</Text>
            <Text style={styles.text}>
              • Conduct comprehensive review of 3-month performance
            </Text>
            <Text style={styles.text}>
              • Analyze key metrics (reach, engagement, conversions)
            </Text>
            <Text style={styles.text}>
              • Calculate ROI on paid campaigns
            </Text>
          </View>
          
          <View style={styles.bulletPoint}>
            <Text style={[styles.text, { fontWeight: "bold" }]}>Strategy Refinement</Text>
            <Text style={styles.text}>
              • Adjust content mix based on performance data
            </Text>
            <Text style={styles.text}>
              • Optimize ad targeting and creative elements
            </Text>
            <Text style={styles.text}>
              • Refine lead capture and nurturing process
            </Text>
          </View>
          
          <View style={styles.bulletPoint}>
            <Text style={[styles.text, { fontWeight: "bold" }]}>Automation & Scaling</Text>
            <Text style={styles.text}>
              • Implement tools for content scheduling and analytics
            </Text>
            <Text style={styles.text}>
              • Create standard operating procedures for ongoing management
            </Text>
            <Text style={styles.text}>
              • Develop a 6-month growth plan based on learnings
            </Text>
          </View>
        </View>
        
        <Text style={[styles.text, { marginTop: 20, fontWeight: "bold" }]}>Key Deliverables:</Text>
        <Text style={styles.text}>
          • Comprehensive performance report
        </Text>
        <Text style={styles.text}>
          • Optimized content and ad strategy
        </Text>
        <Text style={styles.text}>
          • Social media SOP documentation
        </Text>
        <Text style={styles.text}>
          • 6-month growth projection plan
        </Text>
      </View>
      
      {/* Contact Information */}
      <View style={styles.contactInfo}>
        <Text style={{ fontWeight: "bold", fontSize: 12, marginBottom: 5 }}>Yash Suthar</Text>
        <Text>Social Media Manager & Digital Marketing Specialist</Text>
        <Text>capturewithyxsh@gmail.com | +91 9561713120</Text>
        <Text>LinkedIn: linkedin.com/in/yash-suthar-9834ba354/</Text>
      </View>
      
      <View style={styles.footer}>
        <Text>© 2025 Yash Suthar | All Rights Reserved</Text>
      </View>
    </Page>
  </Document>
);

export const generatePDF = async (type = 'caseStudy') => {
  let blob;
  let filename;
  
  if (type === 'roadmap') {
    blob = await pdf(<RoadmapPDF />).toBlob();
    filename = "Digital-Marketing-Roadmap-Yash-Suthar.pdf";
  } else {
    blob = await pdf(<CaseStudyPDF />).toBlob();
    filename = "WEE2-Instagram-Growth-Case-Study-Yash-Suthar.pdf";
  }
  
  saveAs(blob, filename);
};

const PDFGenerator = () => {
  return null; // This component doesn't render anything, just exports the PDF generation function
};

export default PDFGenerator;
