from flask import Flask, render_template, request, jsonify
import openai
import os

app = Flask(__name__)

openai.api_key ="PUT_YOUR_API_KEY_HERE"

@app.route('/')
def index():
    return render_template('index.html')

# Define the route for generating a blog
@app.route('/generate_blog', methods=['POST'])
def generate_blog():
    data = request.form
    tone = data['tone']
    title = data['title']
    keywords = data['keywords']
    prompt = f"Tone: {tone}\nTitle: {title}\nKeywords: {keywords}\n\nGenerate a blog on the given topic:"

    # Use the OpenAI API to generate the blog content
    response = openai.Completion.create(
        model="text-davinci-003",
        prompt=prompt,
        temperature=0.3,
        max_tokens=512,
        top_p=1,
        frequency_penalty=0,
        presence_penalty=0
    )

    generated_content = response.choices[0].text.strip()

    # Return the generated blog content as a response
   
    return render_template('index.html', blog=generated_content)

if __name__ == '__main__':
    app.run(debug=True)
