const videoUrlInput = document.getElementById('video-url');
const summarizeBtn = document.getElementById('summarize-btn');
const transcriptDisplay = document.getElementById('transcript-display');
const summaryDisplay = document.getElementById('summary-display');

summarizeBtn.addEventListener('click', async()=>{
    const videoUrl = videoUrlInput.value.trim();
    if(!videoUrl){
        alert('Please enter a valid Youtube video URL');
        return;
    }
    // Fetch transcript from Youtube video URL
    const transcript = await getTranscriptFromYoutube(videoUrl);

    // Summarize transcript using a simple NLP technique
    const summary = summarizeTranscript(transcript);

    transcriptDisplay.innerText = transcript;
    summaryDisplay.innerText = summary;
});
// Simple NLP function to summarize the transcript
function summarizeTranscript(transcript) {
    const sentences = transcript.split('.');
    const summarySentences = [];

    for (let i = 0; i< sentences.length; i++) {
        const sentence = sentences[i].trim();
        if (sentence.length>10) {
            summarySentences.push(sentence);
        }
    }
    return summarySentences.join('.');
}
//Function to fetch transcript from Youtube video URL
function getTranscriptFromYoutube(videoUrl){
    const transcript = `this is a sample transcript. It's a long piece of text thatneeds to be summarized.`;
    return transcript;
}