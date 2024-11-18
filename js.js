const videoUrlInput = document.getElementById('video-url');
const summarizeBtn = document.getElementById('summarize-btn');
const transcriptDisplay = document.getElementById('transcript-display');
const summaryDisplay = document.getElementById('summary-display');
const loadingIndicator = document.getElementById('loading-indicator');
const videoForm = document.getElementById('video-form');

videoForm.addEventListener('submit', async (event) => {
    event.preventDefault();  // Prevent the form from submitting and causing a page reload

    const videoUrl = videoUrlInput.value.trim();
    if (!videoUrl) {
        alert('Please enter a valid YouTube video URL');
        return;
    }

    loadingIndicator.classList.remove('hidden');
    try {
        // Simulate fetching a transcript based on the URL
        const transcript = await getTranscriptFromYoutube(videoUrl);

        // Summarize the transcript
        const summary = summarizeTranscript(transcript);

        // Display the full transcript in the first column
        transcriptDisplay.innerText = transcript;

        // Display the custom summary text in the second column
        summaryDisplay.innerText = `This is the summary of the given URL video. In this video, we explore how different aspects of programming, including web development and APIs, contribute to modern software development. The video provides useful insights for both beginners and advanced learners, offering key resources for further learning.`;

    } catch (error) {
        alert('Error fetching transcript or processing data');
    } finally {
        loadingIndicator.classList.add('hidden');
    }
});

// Function to simulate fetching a transcript
async function getTranscriptFromYoutube(videoUrl) {
    // Simulating a transcript based on the video URL
    const transcript = `
        This is a sample transcript for the video. 
        In this video, we will cover a variety of topics including programming, web development, and YouTube APIs. 
        First, we will start with basic concepts in JavaScript. 
        Then, we will move to more advanced topics such as asynchronous programming and APIs.
        Finally, we will summarize everything we discussed and give you resources for further learning.
    `;
    return transcript;
}

// Simple NLP function to summarize the transcript
function summarizeTranscript(transcript) {
    const sentences = transcript.split('.').map(sentence => sentence.trim());
    const summarySentences = sentences.filter(sentence => sentence.length > 50); // Filter out very short sentences
    return summarySentences.join('. ') + '.'; // Join the sentences to form a summary
}
