from django.shortcuts import render

@app.route("/")
def index():
    announcements = Announcement.query.all()
    return render_template(
        "index.html",
        prefix=ROOT_URL,
        announcements=announcements)

# Create your views here.

def index():
    return
