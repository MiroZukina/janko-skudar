from flask import Flask, render_template

app = Flask(__name__)

# English Route (Home)
@app.route('/')
def index_en():
    return render_template('index.html')

# Croatian Route
@app.route('/hr')
def index_hr():
    return render_template('index_hr.html')

if __name__ == '__main__':
    app.run(debug=True)