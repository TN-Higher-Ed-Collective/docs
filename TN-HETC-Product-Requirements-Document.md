# Tennessee Higher Ed Tech Collective - Product Requirements Document

# Overview

This document serves as the complete specification for building the Tennessee Higher Ed Tech Collective (TN HETC) documentation site and initial infrastructure. This PRD provides all necessary context for automated site generation, content population, and platform setup.

**Project Name:** Tennessee Higher Ed Tech Collective (TN HETC)  
**Primary Maintainer:** Aaron Sachs, Chattanooga State Community College  
**Target Audience:** IT professionals at Tennessee community colleges and TCATs  
**Technology Stack:** Astro with Starlight theme (documentation-focused)  
**Hosting:** GitHub Pages (free tier)  
**Repository:** To be created at `TN-Higher-Ed-Tech-Collective` or `TN-HETC`

# Mission Statement

To connect Tennessee's community colleges and TCATs through shared technology knowledge, collaborative problem-solving, and open-source resources - empowering IT professionals to learn from each other's experiences and accelerate innovation across our institutions.

# Vision Statement

A thriving community where Tennessee's two-year institutions lead through collaboration, with every IT professional having access to peer expertise, proven solutions, and a supportive network that eliminates duplication of effort and accelerates technology adoption statewide.

# Core Values

1. **Collaboration Over Competition** - Success for one is success for all
2. **Transparency** - Share what works and what doesn't
3. **Accessibility** - Free, open, welcoming to all skill levels
4. **Practical Impact** - Real solutions for real problems
5. **Continuous Learning** - Growing together through shared experience

# Brand Identity

## Official Tennessee State Colors

- **Primary Blue:** #002D65 (RGB: 0, 45, 101) - Use for headers, primary UI elements
- **Primary Red:** #CC0000 (RGB: 204, 0, 0) - Use for accents, CTAs, highlights
- **White:** #FFFFFF (RGB: 255, 255, 255) - Use for backgrounds, contrast

## Typography

- **Headings:** Modern sans-serif (Inter, Roboto, or system default)
- **Body:** Readable sans-serif with good screen rendering
- **Code:** Monospace (Fira Code, JetBrains Mono, or Consolas)

## Tone and Voice

- **Professional but approachable** - We're colleagues, not corporate
- **Direct and practical** - No jargon unless necessary, explain when used
- **Supportive and encouraging** - Everyone's learning together
- **Action-oriented** - Focus on doing, not just discussing

# Technical Requirements

## Documentation Site Technology Stack

**Selected: Astro with Starlight Theme**

Rationale:
- Modern, blazingly fast static site generator
- Starlight theme specifically built for technical documentation
- Excellent developer experience with hot module reloading
- Built-in search, mobile-responsive, accessibility features
- Easy to customize with Tennessee state colors
- Component-based architecture allows for custom interactive features
- Markdown and MDX support for rich content
- Automatic code syntax highlighting
- Built-in dark mode support
- SEO optimized out of the box
- Deploy anywhere (GitHub Pages, Netlify, Vercel)
- Growing ecosystem and strong community support

## Site Structure Requirements

### Primary Navigation

```
Home
├── About
│   ├── Mission & Vision
│   ├── Core Values
│   ├── Charter (Full Text)
│   └── Governance Model
├── Get Started
│   ├── Joining the Community
│   ├── Discord Server Guide
│   ├── GitHub Organization Guide
│   └── Contributing Guidelines
├── Resources
│   ├── Best Practices
│   │   ├── Active Directory
│   │   ├── VMware & Virtualization
│   │   ├── Networking
│   │   ├── Storage
│   │   ├── Security
│   │   └── Monitoring
│   ├── Script Library (links to GitHub repos)
│   ├── Vendor Management
│   ├── Budget Planning
│   └── Disaster Recovery
├── Community
│   ├── Code of Conduct
│   ├── Steering Committee
│   ├── Domain Champions
│   ├── Member Institutions
│   └── Success Stories
└── Events
    ├── Monthly Meetups
    ├── Quarterly Summits
    └── Annual Gathering
```

### Homepage Requirements

**Hero Section:**
- Bold headline: "Tennessee Higher Ed Tech Collective"
- Subheadline: "Connecting IT professionals across Tennessee's community colleges and TCATs"
- Two primary CTAs:
  - "Join on Discord" (prominent, red background)
  - "View GitHub Repos" (secondary, blue outline)

**Custom Homepage Component (src/content/docs/index.mdx):**
```mdx
---
title: Tennessee Higher Ed Tech Collective
description: Connecting IT professionals across Tennessee's community colleges and TCATs
template: splash
hero:
  tagline: Collaborative platform for sharing knowledge, solving problems together, and building community across Tennessee's two-year institutions
  image:
    file: ../../assets/logo.png
  actions:
    - text: Join on Discord
      link: https://discord.gg/INVITE-CODE
      icon: discord
      variant: primary
    - text: View GitHub Repos
      link: https://github.com/TN-HETC
      icon: github
      variant: secondary
---

import { Card, CardGrid } from '@astrojs/starlight/components';

## Why Join TN HETC?

<CardGrid stagger>
  <Card title="Share Knowledge" icon="document">
    Access proven solutions and peer expertise from IT professionals across Tennessee. Stop reinventing the wheel.
  </Card>
  <Card title="Build Community" icon="group">
    Connect with colleagues at other institutions. Share experiences, learn together, and solve problems collaboratively.
  </Card>
  <Card title="Accelerate Innovation" icon="rocket">
    Leverage collective expertise to adopt new technologies faster and more confidently.
  </Card>
</CardGrid>

## Quick Links

<CardGrid>
  <Card title="Get Started" icon="open-book">
    New to TN HETC? [Learn how to join](/get-started/joining/) and start participating in the community.
  </Card>
  <Card title="Browse Scripts" icon="laptop">
    Check out our [GitHub repositories](https://github.com/TN-HETC) with PowerShell scripts, configs, and automation tools.
  </Card>
  <Card title="Read the Charter" icon="document">
    Understand our [mission, vision, and values](/about/charter/) that guide this community.
  </Card>
  <Card title="Code of Conduct" icon="approve-check">
    Review our [community guidelines](/community/code-of-conduct/) for respectful, professional collaboration.
  </Card>
</CardGrid>

## Active Institutions

TN HETC serves IT professionals across **Tennessee's community colleges and TCATs**. [See all participating institutions →](/community/member-institutions/)

## Recent Activity

- 🎉 Monthly Meetup: First Thursday of each month at 2 PM CT
- 📚 New scripts added to PowerShell-Scripts repository
- 💬 Join the conversation in Discord

---

**Ready to get started?** [Join our Discord server](https://discord.gg/INVITE-CODE) and introduce yourself in `#introductions`!
```

**Value Propositions Section:**
Three columns highlighting:
1. **Share Knowledge** - Access proven solutions and peer expertise
2. **Build Community** - Connect with IT professionals across Tennessee
3. **Accelerate Innovation** - Stop reinventing the wheel

**Quick Links Section:**
- Link to Discord server
- Link to GitHub organization
- Link to contributing guidelines
- Link to code of conduct

**Recent Activity Section (if feasible):**
- Latest GitHub repository updates
- Upcoming monthly meetup
- Recent community wins

**Footer:**
- Links to all main sections
- Contact information for steering committee
- Link to charter document
- Copyright notice: "Tennessee Higher Ed Tech Collective © 2025 - Licensed under MIT"

## Required Initial Pages

### 1. About Pages

#### Mission & Vision (`about/mission-vision.md`)

**Content:**
- Full mission statement
- Full vision statement
- Explanation of why TN HETC exists
- The problem we're solving (knowledge isolation, duplication of effort)
- How we're different from official TBR channels

#### Core Values (`about/core-values.md`)

**Content:**
- Each of the 5 core values with detailed explanation
- Examples of values in action
- How values guide decision-making

#### Charter (`about/charter.md`)

**Content:**
- Complete charter document (use existing charter content)
- Formatted for web reading (proper heading hierarchy)
- Table of contents for easy navigation

#### Governance Model (`about/governance.md`)

**Content:**
- Steering committee structure and responsibilities
- Domain champions role
- Decision-making process
- How to get involved in leadership

### 2. Get Started Pages

#### Joining the Community (`get-started/joining.md`)

**Content:**
```markdown
# Joining the Community

Welcome to Tennessee Higher Ed Tech Collective! We're excited to have you here.

## Who Can Join?

TN HETC is open to all IT professionals working at Tennessee community colleges and TCATs, including:
- Systems administrators
- Network engineers
- Help desk technicians
- IT directors and managers
- Security professionals
- Database administrators
- Application administrators
- Student technology workers

## How to Join

### Step 1: Join Our Discord Server

Our Discord server is the heart of the community for daily collaboration and discussion.

1. Click this link: [Discord Invite Link - TO BE ADDED]
2. Create a Discord account if you don't have one (it's free)
3. Introduce yourself in the `#introductions` channel
4. Tell us:
   - Your name
   - Your institution
   - Your role
   - What you're hoping to learn or contribute

### Step 2: Explore GitHub

Our GitHub organization hosts all shared scripts, tools, and documentation.

1. Create a GitHub account if needed (free): https://github.com/join
2. Visit our organization: [GitHub Org Link - TO BE ADDED]
3. Star repositories that interest you
4. Fork any scripts you want to use or modify

### Step 3: Read the Code of Conduct

We maintain a respectful, professional community.

- Read our [Code of Conduct](/community/code-of-conduct)
- Agree to treat fellow members with respect
- Report any concerning behavior to the steering committee

### Step 4: Start Participating

Jump right in:
- Ask questions in relevant Discord channels
- Share a script or solution you've developed
- Contribute to existing repositories via pull requests
- Attend the next monthly meetup

## What to Expect

**First Week:**
- Get oriented with Discord channels
- Browse existing scripts and resources
- Start conversations with peers

**First Month:**
- Attend a monthly themed discussion
- Make your first contribution (even if it's small!)
- Connect with people at other institutions

**First Quarter:**
- Become a regular participant
- Identify areas where you can help others
- Consider volunteering as a domain champion

## Need Help?

- Post in `#general` on Discord
- Reach out to any steering committee member
- Email: [contact email - TO BE ADDED]

Welcome aboard! 🎉
```

#### Discord Server Guide (`get-started/discord-guide.md`)

**Content:**
```markdown
# Discord Server Guide

## Channel Structure

### Welcome & General Channels

**#welcome**  
Server rules, onboarding information, and important links. Start here!

**#introductions**  
Introduce yourself to the community. Tell us about your institution and role.

**#general**  
Water cooler conversation. Tech talk, career discussions, or just saying hi.

**#announcements**  
Important community updates. Low traffic, high signal. Stay informed!

### Technology Domain Channels

**#active-directory**  
AD management, Group Policy, user provisioning, Azure AD integration

**#vmware**  
vSphere, ESXi, virtualization, clustering, vMotion, disaster recovery

**#networking**  
Switches, routers, VLANs, firewalls, VPNs, network design

**#storage**  
SAN, NAS, backup solutions, Pure Storage, Nimble, disk management

**#security**  
Cybersecurity, compliance, patching, vulnerability management, incident response

**#monitoring**  
Grafana, Prometheus, SNMP, network monitoring, alerting systems

**#automation**  
PowerShell, Python, Ansible, scripting, workflow automation

**#cloud-services**  
Azure, AWS, hybrid cloud, migrations, identity federation

**#databases**  
SQL Server, MySQL, PostgreSQL, database administration

**#helpdesk**  
Ticketing systems, service desk operations, end-user support

**#web-services**  
Web servers, application hosting, CMS platforms

### Community Channels

**#wins**  
Celebrate your successes! Solved a tough problem? Share it here.

**#lessons-learned**  
Share what didn't work. We learn more from failures than successes.

**#vendor-discussions**  
Experiences with vendors, product recommendations, contract negotiations

**#job-postings**  
Internal opportunities across Tennessee institutions

**#random**  
Off-topic fun. Hobbies, local events, interesting links

### Voice Channels

**General Voice**  
Drop in anytime for quick conversations

**Monthly Meetup**  
Scheduled monthly themed discussions (first Thursday of each month at 2 PM CT)

**Office Hours**  
Informal help sessions and collaboration

## Discord Etiquette

### Do's

✅ Search before asking - Someone may have already answered  
✅ Use threads for detailed discussions - Keeps channels organized  
✅ Share context when asking questions - What have you tried?  
✅ Give credit when sharing others' work  
✅ Use code blocks for scripts and configs (three backticks)  
✅ @mention sparingly - Don't spam mentions  
✅ Use reactions to show agreement/appreciation  

### Don'ts

❌ Share credentials or sensitive institutional data  
❌ Post in multiple channels (cross-posting)  
❌ Use @everyone or @here (reserved for moderators)  
❌ Engage in vendor promotion or sales  
❌ Start arguments or hostile debates  
❌ Share pirated software or license keys  

## Notifications Management

Discord can get noisy. Here's how to manage it:

**Mute Channels You Don't Need:**
Right-click channel → Mute Channel → Until I turn it back on

**Set Server Notification Level:**
Right-click server icon → Notification Settings → Only @mentions

**Create Custom Notifications:**
Right-click server → Notification Settings → Suppress @everyone and @here

**Use Threads:**
Subscribe only to threads you're actively involved in

## Mobile App Tips

- Download Discord for iOS or Android
- Enable push notifications only for DMs and @mentions
- Use "Mark as Read" liberally to keep up
- Pin important channels for quick access

## Getting Help in Discord

1. Choose the right channel for your question
2. Provide context: What are you trying to do? What have you tried?
3. Share relevant error messages or screenshots
4. Be patient - members respond when they can
5. Follow up with the solution once you find it (helps others!)

## Voice Chat Basics

- Test your mic before joining a call
- Use push-to-talk if in a noisy environment
- Mute when not speaking in large groups
- Share your screen to show problems/solutions
- Recordings are not allowed without explicit consent

## Discord Shortcuts

- `Ctrl/Cmd + K` - Quick channel switcher
- `Ctrl/Cmd + /` - List all keyboard shortcuts
- `Up Arrow` - Edit your last message
- `Shift + Enter` - New line without sending
- `@here` - Notify online members only (moderators only)
- `@channel` - Notify all members (moderators only)

## Reporting Issues

If you encounter problematic behavior:

1. Take a screenshot if relevant
2. Note the date/time and channel
3. DM any steering committee member
4. Or email: [TO BE ADDED]

We take all reports seriously and handle them confidentially.

## Have Fun!

Discord is meant to be engaging and helpful. Don't be shy - introduce yourself, ask questions, and share what you know. We're all here to learn together!
```

#### GitHub Organization Guide (`get-started/github-guide.md`)

**Content:**
```markdown
# GitHub Organization Guide

## Repository Structure

Our GitHub organization hosts all shared code, scripts, and technical resources.

### Main Repositories

**PowerShell-Scripts**  
General PowerShell automation scripts for Windows administration

**Active-Directory**  
AD management tools, user provisioning, Group Policy automation

**VMware-Automation**  
vSphere management, VM deployment, ESXi configuration scripts

**Network-Configs**  
Switch configurations, router templates, network automation

**Security-Tools**  
Security scanning, compliance checking, patch management scripts

**Monitoring-Tools**  
Grafana dashboards, Prometheus configs, monitoring automation

**Templates-And-Docs**  
Documentation templates, runbooks, standard operating procedures

### How to Use Our Repositories

#### Browsing Scripts

1. Visit the repository for your technology domain
2. Browse folders to find relevant scripts
3. Read the README.md for usage instructions
4. Check the script header for dependencies and requirements

#### Using a Script

**Option 1: Download Individual File**
1. Click on the script file
2. Click "Raw" button
3. Right-click → Save As
4. Test in non-production environment first!

**Option 2: Clone Entire Repository**
```bash
git clone https://github.com/TN-HETC/PowerShell-Scripts.git
cd PowerShell-Scripts
```

**Option 3: Fork Repository**
1. Click "Fork" button (top right)
2. Creates a copy in your account
3. Modify as needed for your environment
4. Optionally submit improvements back via pull request

## Contributing Your Work

We encourage everyone to contribute! Here's how:

### Quick Contribution (Single File)

1. Navigate to appropriate repository
2. Click "Add file" → "Upload files"
3. Drag and drop your script
4. Add commit message describing what it does
5. Click "Commit changes"

### Standard Contribution (Pull Request)

**Step 1: Fork the Repository**
1. Click "Fork" button on the repository
2. Clone your fork locally:
```bash
git clone https://github.com/YOUR-USERNAME/REPO-NAME.git
cd REPO-NAME
```

**Step 2: Create a Branch**
```bash
git checkout -b feature/your-script-name
```

**Step 3: Add Your Files**
```bash
# Add your script
git add your-script.ps1

# Commit with descriptive message
git commit -m "Add script for automated user onboarding"
```

**Step 4: Push to Your Fork**
```bash
git push origin feature/your-script-name
```

**Step 5: Create Pull Request**
1. Go to the original repository
2. Click "Pull Requests" → "New Pull Request"
3. Click "compare across forks"
4. Select your fork and branch
5. Add description of what your script does
6. Submit pull request

### Contribution Guidelines

**All scripts must include:**

✅ Header comment block with:
- Description of what the script does
- Author name and institution
- Date created
- Prerequisites or dependencies
- Usage examples

✅ Parameter documentation using comment-based help

✅ Error handling (try/catch blocks)

✅ Clear variable names

✅ Comments explaining complex logic

**Example Header:**
```powershell
<#
.SYNOPSIS
    Automates AD user provisioning for new students
.DESCRIPTION
    Creates user accounts in Active Directory based on CSV import
    from student information system. Assigns to appropriate OUs
    and security groups based on program enrollment.
.PARAMETER CsvPath
    Path to CSV file containing student data
.PARAMETER TestMode
    When specified, shows what would happen without making changes
.EXAMPLE
    .\New-StudentAccounts.ps1 -CsvPath "C:\imports\students.csv"
.EXAMPLE
    .\New-StudentAccounts.ps1 -CsvPath "C:\imports\students.csv" -TestMode
.NOTES
    Author: Aaron Sachs, Chattanooga State Community College
    Date: January 2025
    Requires: Active Directory PowerShell module
    Requires: Read access to student import location
#>
```

### Code of Conduct for Contributors

- **Share "as-is"** - Scripts don't have to be perfect
- **Credit others** - If you modified someone's work, note it
- **No credentials** - Never commit passwords, API keys, or secrets
- **Test first** - Verify scripts work in test environment
- **Document changes** - Explain what you modified and why
- **Be respectful** - Accept feedback graciously
- **Institutional info** - Remove institution-specific details

### Licensing

All contributions are licensed under MIT License unless otherwise specified.

This means:
- Anyone can use, modify, and distribute
- No warranty or liability
- Must include original copyright notice
- Contributors retain credit for their work

### Getting Help with Git/GitHub

**Never used Git before?**
- GitHub Desktop (GUI application): https://desktop.github.com/
- Git Tutorial: https://try.github.io/
- Ask in Discord `#automation` channel

**Common Git Commands:**
```bash
# Clone a repository
git clone https://github.com/TN-HETC/repo-name.git

# Check status
git status

# Add files
git add filename.ps1

# Commit changes
git commit -m "Description of changes"

# Push to GitHub
git push origin branch-name

# Pull latest changes
git pull origin main

# Create new branch
git checkout -b new-branch-name
```

### Repository Maintenance

**Domain Champions** help curate repositories:
- Review pull requests
- Organize files into logical folders
- Update README files
- Remove outdated scripts
- Highlight particularly useful contributions

## Finding Scripts

### Using GitHub Search

**Search within organization:**
```
org:TN-HETC user provisioning
```

**Search specific repository:**
```
repo:TN-HETC/PowerShell-Scripts GPO
```

**Search by file type:**
```
org:TN-HETC extension:ps1 backup
```

**Search by language:**
```
org:TN-HETC language:PowerShell VMware
```

### Browse by Topic

Each repository has topics/tags for filtering:
- Click on a topic tag to see related repositories
- Common topics: powershell, automation, active-directory, vmware, networking

### Star Useful Scripts

- Click ★ Star on repositories you use frequently
- Access your starred repos anytime from your profile
- Shows appreciation for contributors

## Issues and Discussions

### Reporting Problems

Found a bug in a script?

1. Go to the repository
2. Click "Issues" tab
3. Click "New Issue"
4. Describe:
   - What you expected to happen
   - What actually happened
   - Error messages
   - Your environment (OS, PowerShell version, etc.)

### Requesting Features

Want a script to do something new?

1. Open an issue
2. Title: "Feature Request: [description]"
3. Explain the use case
4. Provide examples if possible

### Discussions

Have questions about a script?

1. Click "Discussions" tab (if enabled)
2. Start a new discussion
3. Or ask in Discord `#automation` channel

## Best Practices

### Before Using Any Script

1. **Read the code** - Understand what it does
2. **Check prerequisites** - Do you have required modules/permissions?
3. **Test in non-production** - Always test first!
4. **Modify for your environment** - Update paths, domain names, etc.
5. **Keep attribution** - Maintain author credits

### Security Considerations

⚠️ **Never run scripts blindly**

- Scripts from the internet can be malicious
- Our community is trusted, but verify code yourself
- Use `-WhatIf` parameter when available
- Test with limited scope first
- Review all hardcoded paths and credentials

### Version Control Your Modifications

When you modify a script for your institution:

1. Fork the repository to your account
2. Create institution-specific branch
3. Commit your modifications
4. Keeps your version separate from community version
5. Easy to pull updates from original

## Questions?

Ask in Discord:
- `#automation` for general Git/GitHub questions
- Specific tech channels for script-specific questions
- `#general` for "where do I start?" questions

Happy coding! 🚀
```

#### Contributing Guidelines (`get-started/contributing.md`)

**Content:**
```markdown
# Contributing Guidelines

Thank you for your interest in contributing to Tennessee Higher Ed Tech Collective! This guide explains how to contribute code, documentation, and participate in the community.

## Ways to Contribute

### 1. Share Scripts and Tools

The most valuable contributions are working scripts and tools you've developed:

- PowerShell automation scripts
- Network device configurations
- Monitoring dashboards and configs
- Documentation templates
- Deployment guides
- Troubleshooting playbooks

### 2. Improve Existing Code

Help make existing contributions better:

- Fix bugs
- Add error handling
- Improve documentation
- Add usage examples
- Optimize performance
- Add features

### 3. Create Documentation

Write guides that help others:

- Best practices documents
- How-to guides
- Vendor comparison notes
- Lessons learned writeups
- Architecture diagrams
- Decision frameworks

### 4. Participate in Discussions

Your experience helps others:

- Answer questions on Discord
- Share solutions to problems
- Review pull requests
- Suggest improvements
- Participate in monthly meetups

### 5. Organize and Curate

Help keep things organized:

- Categorize scripts
- Update README files
- Remove outdated content
- Create useful examples
- Tag and label issues

## Code Contribution Process

### Step 1: Choose What to Contribute

**Start with something you've already built:**
- Script you use regularly
- Solution to a problem you solved
- Configuration that works well
- Documentation you wish you'd had

**Or improve existing work:**
- Browse repositories for issues labeled "good first contribution"
- Find scripts that need documentation
- Identify bugs or missing features

### Step 2: Prepare Your Contribution

**For Scripts:**

Include complete header documentation:
```powershell
<#
.SYNOPSIS
    Brief description of what the script does
.DESCRIPTION
    Detailed explanation of functionality, use cases, and behavior
.PARAMETER ParameterName
    Description of each parameter
.EXAMPLE
    Example usage with sample parameters
.NOTES
    Author: Your Name, Your Institution
    Date: Month Year
    Version: 1.0
    Prerequisites: List any required modules, permissions, or dependencies
.LINK
    https://github.com/TN-HETC/repo-name
#>
```

**Checklist before submitting:**
- [ ] Header documentation complete
- [ ] All parameters documented
- [ ] At least one usage example
- [ ] Error handling implemented
- [ ] No hardcoded credentials or institutional details
- [ ] Comments explain complex logic
- [ ] Tested in your environment
- [ ] README.md updated if needed

**For Documentation:**

- Use Markdown format
- Include table of contents for long documents
- Add examples where appropriate
- Link to related resources
- Keep tone professional but approachable
- Spell check and grammar check

### Step 3: Submit Your Contribution

**Quick Method (Single File):**
1. Navigate to appropriate repository
2. Click "Add file" → "Create new file" or "Upload files"
3. Add commit message
4. Submit

**Standard Method (Pull Request):**
1. Fork repository
2. Clone your fork
3. Create feature branch
4. Make changes
5. Commit with descriptive message
6. Push to your fork
7. Open pull request

See [GitHub Guide](/get-started/github-guide) for detailed Git instructions.

### Step 4: Review Process

**What happens next:**

1. **Automated checks** - Basic validation runs automatically
2. **Community review** - Other members may comment or suggest improvements
3. **Domain champion review** - Subject matter expert reviews for quality
4. **Discussion** - You may be asked questions or for clarifications
5. **Approval** - Once accepted, your contribution is merged!

**Timeline:**
- Simple contributions: Usually within 3-5 days
- Complex contributions: May take 1-2 weeks
- Documentation: Usually within a week

**Be patient and responsive:**
- Answer questions about your contribution
- Be open to suggested improvements
- Make requested changes
- All feedback is meant to make contributions better

## Quality Standards

### Code Quality

**We value working code over perfect code:**
- Share what works for you
- Don't wait for perfection
- Community will help improve

**Minimum requirements:**
- Must not be malicious or destructive
- Should include basic error handling
- Must have documentation header
- Should be tested in at least one environment
- No hardcoded credentials

**Appreciated bonuses:**
- Comprehensive error handling
- Support for -WhatIf and -Confirm
- Pipeline support
- Verbose logging
- Parameter validation
- Pester tests

### Documentation Quality

**Minimum requirements:**
- Clear and accurate
- Proper spelling and grammar
- Logical organization
- Links work correctly

**Appreciated bonuses:**
- Screenshots or diagrams
- Multiple examples
- Troubleshooting section
- Related resources
- Version history

## Community Standards

### Code of Conduct

All contributors must follow our [Code of Conduct](/community/code-of-conduct):

- Treat others with respect
- Accept constructive feedback
- Focus on what's best for the community
- Show empathy toward others
- Be patient with newcomers

### Attribution and Credit

**Giving credit:**
- Cite sources if you modified existing work
- Link to original if you forked someone's repo
- Mention collaborators who helped
- Reference documentation you used

**Receiving credit:**
- Your name stays in script headers
- GitHub tracks all contributions
- Community recognizes valuable contributors
- Steering committee highlights significant contributions

### Intellectual Property

**What you can contribute:**
- Original work you created
- Work created as part of your job (with employer permission)
- Modifications to existing open-source work
- Publicly available information compiled and organized

**What you cannot contribute:**
- Proprietary vendor code
- Licensed software or tools
- Copyrighted documentation
- Others' work without attribution
- Anything that violates your employment agreement

**When in doubt:**
- Ask your supervisor
- Consult your institution's IT policy
- Post in Discord for advice
- Contact steering committee

### Licensing

All contributions are licensed under MIT License:

```
MIT License

Copyright (c) 2025 Tennessee Higher Ed Tech Collective

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

**What this means:**
- Anyone can use your contribution
- You retain credit
- No warranty or liability
- Must include license notice

## Recognition

We celebrate contributors in multiple ways:

### Ongoing Recognition

- GitHub contribution graph shows your activity
- Pull request comments acknowledge good work
- Discord `#wins` channel highlights contributions
- Monthly newsletter (when established) features contributors

### Quarterly Recognition

- Top contributors featured in quarterly summit
- Domain champions recognized for curation work
- Steering committee acknowledges impactful contributions

### Annual Recognition

- Annual report lists all contributors
- Special recognition for sustained participation
- Community awards for exceptional contributions

## Getting Help

### Before Contributing

Need help getting started?

- Read [GitHub Guide](/get-started/github-guide)
- Ask in Discord `#automation` channel
- Reach out to domain champions
- Contact steering committee

### During Contribution

Have questions while working?

- Post in relevant Discord channel
- Open a GitHub Discussion
- Ask for help in pull request comments
- Pair program with a community member

### After Contribution

Want to improve or extend your work?

- Update your pull request with additional commits
- Open follow-up pull requests
- Respond to issues about your contribution
- Mentor others using your code

## First Contribution Ideas

Not sure where to start? Try these:

**Easy First Contributions:**
1. Fix typos in documentation
2. Add usage examples to existing scripts
3. Create README for repository without one
4. Share a simple script you use daily
5. Document a process at your institution

**Medium Contributions:**
1. Add error handling to existing script
2. Combine multiple scripts into workflow
3. Create comprehensive how-to guide
4. Share complex automation script
5. Develop Grafana dashboard

**Advanced Contributions:**
1. Create full automation framework
2. Build comprehensive documentation site
3. Develop testing framework
4. Create CI/CD pipeline
5. Lead domain working group

## Questions or Concerns?

**For contribution questions:**
- Discord: `#automation` or relevant tech channel
- GitHub: Open a discussion
- Email: [TO BE ADDED]

**For disputes or issues:**
- Contact any steering committee member
- Email: [TO BE ADDED]
- All concerns handled confidentially

---

**Thank you for contributing to Tennessee Higher Ed Tech Collective!**

Your shared knowledge makes all of us better. Every contribution, no matter how small, helps someone else solve a problem faster or learn something new.

Let's build something great together! 🚀
```

### 3. Community Pages

#### Code of Conduct (`community/code-of-conduct.md`)

**Content:**
```markdown
# Code of Conduct

## Our Pledge

Tennessee Higher Ed Tech Collective is committed to providing a welcoming, professional, and harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation.

We pledge to make participation in our community a positive experience for all members.

## Our Standards

### Expected Behavior

Participants are expected to:

✅ **Be Respectful**
- Treat all community members with respect and professionalism
- Value diverse perspectives and experiences
- Accept constructive criticism graciously
- Focus on what is best for the community
- Show empathy toward other community members

✅ **Be Collaborative**
- Share knowledge generously
- Help others learn and grow
- Provide constructive feedback
- Acknowledge others' contributions
- Work together to solve problems

✅ **Be Professional**
- Use welcoming and inclusive language
- Keep discussions focused and on-topic
- Respect differences of opinion
- Maintain confidentiality about institutional specifics
- Give credit where credit is due

✅ **Be Supportive**
- Welcome newcomers warmly
- Answer questions patiently
- Share both successes and failures
- Encourage others' efforts
- Celebrate community wins

### Unacceptable Behavior

The following behaviors are unacceptable:

❌ **Harassment and Discrimination**
- Offensive comments related to personal characteristics
- Inappropriate sexual attention or advances
- Deliberate intimidation, stalking, or following
- Sustained disruption of discussions
- Unwelcome attention of any kind

❌ **Unprofessional Conduct**
- Personal attacks or insults
- Trolling or inflammatory comments
- Public or private harassment
- Publishing others' private information
- Aggressive or hostile communication

❌ **Abuse of Platform**
- Spamming channels or repositories
- Self-promotion or advertising without permission
- Vendor sales pitches or product promotion
- Sharing pirated software or license keys
- Posting malicious code or destructive scripts

❌ **Confidentiality Violations**
- Sharing others' private or sensitive information
- Disclosing institutional vulnerabilities publicly
- Posting credentials, passwords, or API keys
- Revealing confidential institutional data
- Discussing sensitive student or employee information

## Scope

This Code of Conduct applies to:

- All Discord channels and direct messages
- GitHub repositories, issues, and pull requests
- Community events (virtual or in-person)
- Email communications
- Any space where members represent TN HETC

## Enforcement

### Reporting Violations

If you experience or witness unacceptable behavior:

**Option 1: Report to Steering Committee**
- Direct message any steering committee member on Discord
- Email: [TO BE ADDED]
- All reports are treated confidentially

**Option 2: Anonymous Reporting**
- Use anonymous form: [TO BE ADDED]
- Provide as much detail as possible
- Include screenshots if relevant

**What to Include:**
- Description of the incident
- When and where it occurred
- Who was involved
- Any relevant screenshots or logs
- Impact on you or others
- Whether you've talked to the person involved

### What Happens Next

**Immediate Actions:**
1. Report received and acknowledged within 24 hours
2. Steering committee reviews the report
3. Additional information gathered if needed
4. Decision made on appropriate response
5. Reporter notified of outcome

**Response Timeline:**
- Acknowledgment: Within 24 hours
- Investigation: 3-7 days for most cases
- Resolution: Within 14 days of report
- Serious incidents may be handled immediately

### Enforcement Guidelines

Consequences depend on severity and pattern of behavior:

**Level 1: Correction**
- **Violation:** Minor inappropriate behavior or communication
- **Response:** Private warning from steering committee
- **Explanation:** Clarify expectations and community standards
- **Follow-up:** Informal check-in after 30 days

**Level 2: Warning**
- **Violation:** Repeated minor violations or single moderate violation
- **Response:** Formal written warning
- **Consequences:** Temporary restriction from certain channels or activities
- **Duration:** Typically 30 days
- **Follow-up:** Required acknowledgment of expectations

**Level 3: Temporary Ban**
- **Violation:** Serious violation or pattern of problematic behavior
- **Response:** Temporary removal from all community platforms
- **Duration:** 30-90 days depending on severity
- **Reinstatement:** Requires acknowledgment and commitment to change
- **Follow-up:** Probationary period after return

**Level 4: Permanent Ban**
- **Violation:** Severe harassment, threats, or repeated serious violations
- **Response:** Permanent removal from all community platforms
- **Appeal:** May be considered after 12 months
- **Notification:** Institutional leadership may be notified if appropriate

### Appeals Process

If you disagree with an enforcement decision:

1. Submit appeal in writing to steering committee
2. Explain why you believe the decision was incorrect
3. Provide any additional relevant information
4. Steering committee reviews within 14 days
5. Decision is final after appeal review

## Confidentiality

**Reports are confidential:**
- Only steering committee members see full details
- Reporters are not identified without permission
- Accused parties are informed of violations, not reporters
- Outcomes are not publicly discussed
- Records maintained securely

**Exceptions to confidentiality:**
- Legal obligation to report (threats, child safety, etc.)
- Danger to community members
- Pattern of behavior affecting multiple people
- When reporter requests public acknowledgment

## Responsibilities

### Steering Committee

- Enforce Code of Conduct fairly and consistently
- Respond to reports promptly and professionally
- Maintain confidentiality throughout process
- Communicate decisions clearly
- Review and update Code of Conduct annually

### Domain Champions

- Model expected behavior in channels
- Redirect off-topic or problematic discussions
- Report violations to steering committee
- Help maintain positive community culture

### All Members

- Read and understand Code of Conduct
- Report violations when observed
- Respect enforcement decisions
- Help maintain welcoming environment
- Support affected community members

## Additional Guidelines

### Conflict Resolution

Before filing a report, consider:

1. **Direct communication:** Can you talk to the person directly?
2. **Misunderstanding:** Could this be a miscommunication?
3. **Good intent:** Are they aware of the impact?
4. **Learning opportunity:** Can this be a teaching moment?

Not all conflicts require formal intervention. Sometimes a direct, respectful conversation resolves the issue.

### Institutional Matters

**TN HETC is not:**
- A replacement for institutional HR processes
- A formal complaint or grievance system
- Authorized to intervene in employment matters
- Able to enforce institutional policies

**If an issue involves:**
- Employment disputes
- Institutional policy violations
- Legal matters
- Student privacy (FERPA)
- Protected health information (HIPAA)

→ Use appropriate institutional channels

### Privacy and Data Protection

**We respect your privacy:**
- Membership lists are not public
- Email addresses are not shared
- Institutional affiliation is voluntary to disclose
- Personal information is protected
- No tracking beyond platform defaults

## Questions

**About the Code of Conduct:**
- Post in Discord `#general` channel
- Email steering committee: [TO BE ADDED]
- Discuss at monthly community meetup

**About a specific situation:**
- Contact any steering committee member privately
- Use anonymous reporting form
- Email: [TO BE ADDED]

## Acknowledgments

This Code of Conduct is adapted from:
- Contributor Covenant, version 2.1
- Django Code of Conduct
- Python Community Code of Conduct
- Geek Feminism Anti-Harassment Policy

## Updates

- **Version 1.0** - November 2025 - Initial release
- This document may be updated based on community feedback
- Major changes will be announced to all members
- Suggestions for improvement are welcome

---

**Remember:** We're all here because we want to make Tennessee higher ed IT better. Let's treat each other with the respect and professionalism we all deserve.

Questions about this Code of Conduct? Contact the steering committee.
```

#### Member Institutions (`community/member-institutions.md`)

**Content:**
```markdown
# Member Institutions

Tennessee Higher Ed Tech Collective brings together IT professionals from community colleges and TCATs across the state.

## Participating Institutions

### Community Colleges

**Founding Members** (actively represented on steering committee or early adopters):

- Chattanooga State Community College
- [TO BE ADDED as institutions join]
- [TO BE ADDED as institutions join]

**Active Members** (regular participants in community):

- [TO BE ADDED as institutions join]
- [TO BE ADDED as institutions join]

**Participating Members** (staff from these institutions have joined):

- [TO BE ADDED as institutions join]
- [TO BE ADDED as institutions join]

### Tennessee Colleges of Applied Technology (TCATs)

**Active Members:**

- [TO BE ADDED as institutions join]
- [TO BE ADDED as institutions join]

---

*This list is updated monthly as new institutions join the community.*

## Joining as an Institution

### For IT Directors

Want your institution represented in TN HETC?

1. **Encourage your team** to join Discord and participate
2. **Designate a representative** to track community activities
3. **Share relevant scripts** your team has developed
4. **Participate in monthly meetups**

There's no formal registration process - just start participating!

### For Individual IT Professionals

You don't need institutional approval to join:

1. Join as an individual contributor
2. Represent your institution informally
3. Share knowledge and learn from peers
4. Your participation may inspire colleagues to join

## Geographic Distribution

Tennessee Higher Ed Tech Collective serves institutions across all three grand divisions:

**East Tennessee:**
- [Institutions to be listed as they join]

**Middle Tennessee:**
- [Institutions to be listed as they join]

**West Tennessee:**
- [Institutions to be listed as they join]

## Institutional Benefits

### For Participating Institutions

- **Reduced duplication** - Access solutions already developed elsewhere
- **Faster problem resolution** - Tap into collective expertise
- **Professional development** - Staff learn from peers across the state
- **Vendor insights** - Leverage collective vendor experiences
- **Collaboration opportunities** - Partner on larger initiatives
- **Recruitment support** - Job postings reach qualified candidates

### For the Tennessee System

- **Improved efficiency** - Eliminate redundant problem-solving
- **Better technology adoption** - Spread innovations faster
- **Stronger workforce** - IT professionals develop broader skills
- **Cost savings** - Share resources instead of duplicating effort
- **Innovation** - Cross-pollination of ideas drives improvements

## Engagement Levels

Institutions participate at different levels - all are valuable!

**Observers** (just getting started):
- Staff occasionally browse resources
- Reading Discord discussions
- Monitoring GitHub repositories

**Contributors** (active participation):
- Regular Discord participation
- Sharing scripts and solutions
- Attending monthly meetups
- Contributing to repositories

**Champions** (community leaders):
- Steering committee representation
- Domain champion volunteering
- Hosting events or presentations
- Mentoring newer members

## Contact Your Peers

Looking to connect with someone at a specific institution?

1. **Search Discord** - Use member list or #introductions
2. **Ask in #general** - "Anyone from [institution]?"
3. **Check GitHub** - Look at commit history in relevant repos
4. **Monthly meetups** - Great place to meet people

## Adding Your Institution

To add your institution to this list:

1. Have at least one active participant
2. Submit pull request to update this page
3. Or message steering committee on Discord
4. Include:
   - Institution name
   - Primary contact (optional)
   - Any areas of particular expertise

No formal approval needed - if you're here, you're welcome!

## System-Wide Initiatives

### Current Collaborations

- [TO BE ADDED as projects develop]
- [TO BE ADDED as projects develop]

### Potential Future Initiatives

- Shared monitoring infrastructure
- Consortium purchasing discussions
- Standardized security baselines
- Cross-institutional disaster recovery
- Joint vendor negotiations

## Questions?

- **For institutional leadership:** Email [TO BE ADDED]
- **For individual members:** Ask in Discord #general
- **For steering committee:** Contact any member on Discord

---

*Last updated: November 2025*
```

## Required Functional Features

### 1. Search Functionality

**Requirements:**
- Full-text search across all documentation
- Search results highlight matching text
- Keyboard shortcut to open search (Ctrl+K or Cmd+K)
- Search from any page
- Instant results as you type

**Implementation:**
- MkDocs Material has this built-in
- Docusaurus has Algolia DocSearch
- VitePress has built-in search

### 2. Navigation

**Requirements:**
- Clear main navigation menu
- Breadcrumb navigation showing current location
- "Edit this page" link on every page (links to GitHub)
- Previous/Next page navigation at bottom
- Sidebar with section navigation
- Automatically generated table of contents on right side

### 3. Mobile Responsive

**Requirements:**
- Readable on mobile devices
- Hamburger menu for navigation on small screens
- Touch-friendly interactive elements
- Proper viewport scaling
- No horizontal scrolling required

### 4. Accessibility

**Requirements:**
- Proper heading hierarchy (no skipped levels)
- Alt text for all images
- Keyboard navigation support
- ARIA labels where appropriate
- Sufficient color contrast ratios
- Screen reader friendly

### 5. Code Blocks

**Requirements:**
- Syntax highlighting for multiple languages
- Copy button on all code blocks
- Line numbers (optional, per block)
- Highlighting specific lines
- Support for PowerShell, Python, Bash, JSON, YAML

**Example:**
```powershell
# This should have syntax highlighting and a copy button
Get-ADUser -Filter * | Select-Object Name, UserPrincipalName
```

### 6. Admonitions/Callouts

**Requirements:**
Support for different types of callouts using Starlight's Aside component:
- Note (informational)
- Tip (helpful suggestion)
- Caution (warning, use with care)
- Danger (important warning, critical)

**Example:**
```markdown
:::note
This is informational content that provides context.
:::

:::tip
Always test scripts in a non-production environment first!
:::

:::caution
Use the -WhatIf parameter to preview changes without executing them.
:::

:::danger
Never commit credentials or API keys to public repositories!
:::
```

### 7. Link Handling

**Requirements:**
- External links open in new tab
- Internal links navigate within site
- Broken link detection during build
- Link icons to indicate external links
- Proper link formatting in navigation

## Content Management

### Markdown Standards

**File Naming:**
- Use lowercase
- Use hyphens for spaces
- Extension: `.md`
- Example: `active-directory-best-practices.md`

**Heading Standards:**
- One H1 per page (page title)
- Use heading hierarchy (H1 → H2 → H3, don't skip)
- Use descriptive headings
- Avoid redundant headings ("Introduction" at top of page)

**Link Standards:**
- Use relative links for internal pages: `[Contributing](/get-started/contributing)`
- Use absolute URLs for external links: `https://github.com/TN-HETC`
- Check all links before committing

**Code Block Standards:**
```markdown
Specify language for syntax highlighting:

​```powershell
Get-Service
​```

​```bash
ls -la
​```

​```python
print("Hello World")
​```
```

## Deployment

### GitHub Pages Setup

**Requirements:**
1. GitHub repository: `TN-Higher-Ed-Tech-Collective/docs` or similar
2. GitHub Actions workflow for automatic deployment
3. Custom domain (optional): `docs.tn-hetc.org` or similar
4. HTTPS enabled (automatic with GitHub Pages)
5. Deploy on push to `main` branch

### Build Process

**On every commit to main:**
1. Install dependencies
2. Build static site
3. Run link checker
4. Deploy to GitHub Pages
5. Notify Discord #announcements if build fails

### Environment Variables

None needed for static site, but may want:
- `DISCORD_WEBHOOK_URL` - for build notifications
- `GITHUB_TOKEN` - for API access if needed

## Initial Content to Populate

### Immediate Priority (MVP)

1. **Homepage** with hero section and quick links
2. **About section:**
   - Mission & Vision
   - Core Values
   - Charter
3. **Get Started section:**
   - Joining guide
   - Discord guide
   - GitHub guide
   - Contributing guidelines
4. **Community section:**
   - Code of Conduct
   - Member Institutions (initial list)

### Secondary Priority (Week 2)

5. **Resources section:**
   - Best Practices landing page
   - At least 2 initial best practice guides
   - Script library overview (linking to GitHub)
6. **Events section:**
   - Monthly meetup information
   - Calendar of upcoming events

### Future Content

7. Additional best practice guides
8. Success stories
9. Domain champion profiles
10. FAQ page
11. Glossary of terms

## Maintenance Plan

### Regular Updates

**Weekly:**
- Monitor for broken links
- Review and merge documentation pull requests
- Update member institutions list

**Monthly:**
- Add summary of monthly meetup
- Update events calendar
- Review analytics (if implemented)
- Check for outdated content

**Quarterly:**
- Content audit for accuracy
- Review navigation structure
- Update success metrics
- Solicit feedback for improvements

### Content Ownership

**Steering Committee:**
- Overall site structure
- Charter and governance docs
- Official announcements

**Domain Champions:**
- Best practices in their domain
- Resource curation
- Technical accuracy

**Community:**
- Contributing guides
- How-to documentation
- Example scripts

## Analytics (Optional)

### Privacy-Respecting Analytics

If implemented, use privacy-first solution:
- Plausible Analytics (recommended)
- Simple Analytics
- Fathom Analytics

**Don't use:**
- Google Analytics (privacy concerns)
- Any analytics requiring cookie consent

**Track:**
- Page views
- Popular pages
- Referral sources
- Search queries (to improve docs)

**Don't track:**
- Personal information
- IP addresses
- Individual users

## Success Criteria

### Launch Success (Month 1)

- [ ] Site live and accessible
- [ ] All MVP content published
- [ ] No broken links
- [ ] Mobile responsive
- [ ] Search working
- [ ] Discord linked from site
- [ ] GitHub org linked from site

### Growth Success (Month 3)

- [ ] 10+ best practice guides
- [ ] Active Discord with 30+ members
- [ ] 5+ member institutions
- [ ] Regular monthly meetups happening
- [ ] Content contributed by community

### Maturity Success (Month 6)

- [ ] 25+ best practice guides
- [ ] 50+ active Discord members
- [ ] 10+ member institutions
- [ ] Self-sustaining content contributions
- [ ] Positive feedback from users

## Technical Specifications

### Astro with Starlight Theme

**Installation:**
```bash
npm create astro@latest -- --template starlight
```

**Configuration (astro.config.mjs):**
```javascript
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://tn-hetc.github.io',
  base: '/docs',
  integrations: [
    starlight({
      title: 'TN Higher Ed Tech Collective',
      logo: {
        src: './src/assets/logo.png',
      },
      social: {
        github: 'https://github.com/TN-HETC',
        discord: 'https://discord.gg/INVITE-CODE',
      },
      editLink: {
        baseUrl: 'https://github.com/TN-HETC/docs/edit/main/',
      },
      customCss: [
        './src/styles/custom.css',
      ],
      sidebar: [
        {
          label: 'About',
          items: [
            { label: 'Mission & Vision', link: '/about/mission-vision/' },
            { label: 'Core Values', link: '/about/core-values/' },
            { label: 'Charter', link: '/about/charter/' },
            { label: 'Governance', link: '/about/governance/' },
          ],
        },
        {
          label: 'Get Started',
          items: [
            { label: 'Joining the Community', link: '/get-started/joining/' },
            { label: 'Discord Guide', link: '/get-started/discord-guide/' },
            { label: 'GitHub Guide', link: '/get-started/github-guide/' },
            { label: 'Contributing', link: '/get-started/contributing/' },
          ],
        },
        {
          label: 'Resources',
          items: [
            { label: 'Overview', link: '/resources/' },
            {
              label: 'Best Practices',
              items: [
                { label: 'Active Directory', link: '/resources/best-practices/active-directory/' },
                { label: 'VMware', link: '/resources/best-practices/vmware/' },
                { label: 'Networking', link: '/resources/best-practices/networking/' },
                { label: 'Storage', link: '/resources/best-practices/storage/' },
                { label: 'Security', link: '/resources/best-practices/security/' },
              ],
            },
            { label: 'Script Library', link: '/resources/scripts/' },
          ],
        },
        {
          label: 'Community',
          items: [
            { label: 'Code of Conduct', link: '/community/code-of-conduct/' },
            { label: 'Steering Committee', link: '/community/steering-committee/' },
            { label: 'Member Institutions', link: '/community/member-institutions/' },
          ],
        },
        {
          label: 'Events',
          items: [
            { label: 'Monthly Meetups', link: '/events/monthly-meetups/' },
            { label: 'Quarterly Summits', link: '/events/quarterly-summits/' },
          ],
        },
      ],
      components: {
        // Override default components if needed
      },
    }),
  ],
});
```

**Custom CSS (src/styles/custom.css):**
```css
/* Tennessee State Colors */
:root {
  --sl-color-accent-low: #f0f4ff;
  --sl-color-accent: #002D65;        /* TN Blue - Primary */
  --sl-color-accent-high: #001D45;
  --sl-color-white: #ffffff;
  --sl-color-gray-1: #f8f9fa;
  --sl-color-gray-2: #e9ecef;
  --sl-color-gray-3: #dee2e6;
  --sl-color-gray-4: #ced4da;
  --sl-color-gray-5: #adb5bd;
  --sl-color-gray-6: #6c757d;
  --sl-color-black: #1a1a1a;
  
  /* TN Red for accents and CTAs */
  --tn-red: #CC0000;
  --tn-red-light: #FF3333;
  --tn-red-dark: #990000;
}

/* Custom button styles for CTAs */
.sl-link-button[data-variant="primary"] {
  background-color: var(--tn-red);
  border-color: var(--tn-red);
}

.sl-link-button[data-variant="primary"]:hover {
  background-color: var(--tn-red-dark);
  border-color: var(--tn-red-dark);
}

/* Accent color for links */
a:not(.sl-link-button) {
  color: var(--sl-color-accent);
}

a:not(.sl-link-button):hover {
  color: var(--sl-color-accent-high);
}

/* Custom hero section for homepage */
.hero-section {
  background: linear-gradient(135deg, var(--sl-color-accent) 0%, var(--sl-color-accent-high) 100%);
  color: var(--sl-color-white);
  padding: 4rem 2rem;
  text-align: center;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
}

.hero-section h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--sl-color-white);
}

.hero-section p {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  opacity: 0.95;
}

.hero-cta {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.hero-cta .btn-primary {
  background-color: var(--tn-red);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.2s;
}

.hero-cta .btn-primary:hover {
  background-color: var(--tn-red-dark);
}

.hero-cta .btn-secondary {
  background-color: transparent;
  color: white;
  padding: 0.75rem 1.5rem;
  border: 2px solid white;
  border-radius: 0.375rem;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.2s;
}

.hero-cta .btn-secondary:hover {
  background-color: white;
  color: var(--sl-color-accent);
}

/* Value propositions section */
.value-props {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.value-prop {
  padding: 2rem;
  border: 1px solid var(--sl-color-gray-3);
  border-radius: 0.5rem;
  text-align: center;
}

.value-prop h3 {
  color: var(--sl-color-accent);
  margin-bottom: 1rem;
}

/* Code block enhancements */
pre {
  border-left: 4px solid var(--sl-color-accent);
}

/* Callout boxes (Starlight uses Aside component) */
aside.starlight-aside--tip {
  border-color: var(--tn-red);
}

/* Footer customization */
footer {
  border-top: 2px solid var(--sl-color-gray-3);
  margin-top: 4rem;
}
```

**Package.json scripts:**
```json
{
  "name": "tn-hetc-docs",
  "type": "module",
  "version": "1.0.0",
  "scripts": {
    "dev": "astro dev",
    "start": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "astro": "astro"
  },
  "dependencies": {
    "@astrojs/starlight": "latest",
    "astro": "latest",
    "sharp": "latest"
  }
}
```

**GitHub Actions Deployment (.github/workflows/deploy.yml):**
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build site
        run: npm run build
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

## Project Structure

```
docs/                              # Repository root
├── .github/
│   └── workflows/
│       └── deploy.yml             # GitHub Actions for deployment
├── src/
│   ├── content/
│   │   ├── docs/
│   │   │   ├── index.mdx          # Homepage
│   │   │   ├── about/
│   │   │   │   ├── mission-vision.md
│   │   │   │   ├── core-values.md
│   │   │   │   ├── charter.md
│   │   │   │   └── governance.md
│   │   │   ├── get-started/
│   │   │   │   ├── joining.md
│   │   │   │   ├── discord-guide.md
│   │   │   │   ├── github-guide.md
│   │   │   │   └── contributing.md
│   │   │   ├── resources/
│   │   │   │   ├── index.md
│   │   │   │   ├── best-practices/
│   │   │   │   │   ├── active-directory.md
│   │   │   │   │   ├── vmware.md
│   │   │   │   │   ├── networking.md
│   │   │   │   │   ├── storage.md
│   │   │   │   │   └── security.md
│   │   │   │   └── scripts.md
│   │   │   ├── community/
│   │   │   │   ├── code-of-conduct.md
│   │   │   │   ├── steering-committee.md
│   │   │   │   └── member-institutions.md
│   │   │   └── events/
│   │   │       ├── monthly-meetups.md
│   │   │       └── quarterly-summits.md
│   │   └── config.ts              # Content collections config
│   ├── assets/
│   │   ├── logo.png
│   │   ├── favicon.ico
│   │   └── images/
│   └── styles/
│       └── custom.css             # Tennessee colors and custom styles
├── public/
│   └── favicon.ico                # Public assets
├── astro.config.mjs               # Astro & Starlight configuration
├── package.json                   # Dependencies and scripts
├── tsconfig.json                  # TypeScript configuration
├── README.md                      # Repository README
└── LICENSE                        # MIT License

PowerShell-Scripts/                # Separate repository
├── ActiveDirectory/
│   ├── README.md
│   └── scripts...
├── VMware/
│   ├── README.md
│   └── scripts...
└── ...

Active-Directory/                  # Separate repository
└── ...

[Additional script repositories...]
```

## Immediate Next Steps

### Step 1: Repository Setup
1. Create GitHub organization: `TN-Higher-Ed-Tech-Collective` or `TN-HETC`
2. Create repository: `docs`
3. Initialize with README, LICENSE (MIT), and .gitignore

### Step 2: Documentation Site
1. Run `npm create astro@latest -- --template starlight` to initialize
2. Configure astro.config.mjs with Tennessee colors and navigation
3. Create src/styles/custom.css for branding
4. Set up directory structure in src/content/docs/
5. Add logo and favicon to src/assets/

### Step 3: GitHub Actions
1. Create .github/workflows/deploy.yml
2. Configure automatic deployment to GitHub Pages
3. Test deployment pipeline

### Step 4: Initial Content
1. Copy charter content to src/content/docs/about/charter.md
2. Create other About pages
3. Create Get Started guides
4. Create Code of Conduct
5. Create homepage (index.mdx) with hero section and CTAs

### Step 5: Script Repositories
1. Create PowerShell-Scripts repository
2. Create Active-Directory repository
3. Create initial README files
4. Add contributing guidelines
5. Add MIT license

### Step 6: Discord Setup
1. Create Discord server
2. Set up channel structure
3. Configure roles and permissions
4. Create welcome message
5. Add community guidelines

### Step 7: Launch
1. Invite founding members to Discord
2. Announce documentation site
3. Link from Discord to docs site
4. Begin recruiting additional members

## Support and Questions

For questions while building:
- **Technical:** Ask in Discord #automation once Discord is live
- **Content:** Reference this PRD
- **Process:** Contact Aaron Sachs (project founder)

## License

All documentation and code released under MIT License.

---

**Document Version:** 1.0  
**Last Updated:** November 2025  
**Maintained By:** Aaron Sachs, Chattanooga State Community College  
**Review Frequency:** Monthly for first 3 months, then quarterly
