# SUPER SERVER - Instant Video Creation Through Text

## Team Members

- **Likitha Khatri** | Computer Science Student, VIT Bhopal University | Expected Graduation: 2025  

- **Aarya Prakhar** | Computer Science Student, VIT Bhopal University | Expected Graduation: 2025  

## Project Overview: Instant Video Creation Through Text

### Description of the Solution

**SUPER SERVER** is an AI-driven platform that automates the creation of videos from uploaded text documents such as PDFs, brochures, and articles. Helps convert complex documents into engaging video content, complete with quizzes.

### Key Features:
1. **Text Upload & Analysis:** Users upload documents (PDFs, brochures), and the system extracts key information using libraries like `PyPDF2`, `pdfplumber`, and Natural Language Processing (NLP) techniques such as Named Entity Recognition (NER).
2. **Video Script Creation:** The system generates a video script from the extracted information using OpenAI's GPT-4. Users can review and adjust the script before proceeding.
3. **Video Production:** Using FFmpeg and AWS MediaConvert, the platform automatically generates a video, incorporating relevant visuals (via APIs like Unsplash and YouTube) and audio (Google TTS).
4. **Quiz Creation:** After the video is generated, an interactive quiz is created based on the content, helping reinforce the material and assess the user’s understanding.

### Tech Stack:
- **Cloud Service Providers:** AWS, Google Cloud
- **Backend:** Python (Flask/Django), Node.js
- **Frontend:** React.js, Tailwind CSS
- **Database:** PostgreSQL, MySQL
- **Text Analysis:** PyPDF2, pdfplumber, NLP libraries
- **Video Production:** FFmpeg, AWS MediaConvert
- **Analytics:** D3.js, Chart.js
- **APIs:** OpenAI, Google TTS, YouTube API, Unsplash

### Video Prototype

https://github.com/user-attachments/assets/7f6f029b-144c-4d03-9063-0cc874b8ffbf


Click the thumbnail to watch the video prototype of the solution on YouTube.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/likitha173/Super
