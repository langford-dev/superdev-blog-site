export const getReadTime = (content) => {
	if (!content) return;
	
	const wpm = 210;
	const formattedContent = content.replace(/<\/?[^>]+(>|$)/g, "");
	const numberOfWords = formattedContent.split(/\s/g).length;
	const timeInMinutes = Math.ceil(numberOfWords / wpm);

	return `${numberOfWords} words ${timeInMinutes} min read`
};