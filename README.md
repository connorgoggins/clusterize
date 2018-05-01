# Clusterize

Welcome to Clusterize - my Spring 2018 research project under the supervision of
Professor Lydia Chilton in the Department of Computer Science at Columbia University.
Clusterize is a tool for clustering a set of documents in multiple configurations
using K-Means clustering. In addition to successfully implementing the K-Means
algorithm with stemming in Python, Clusterize also supports a GUI for interacting
with this program, written in JavaScript and backed by a Node server. In the GUI,
clusters will be listed in order of smallest distance to the respective centroid.
Each cluster entry will include the cluster's associated stems, an example, and the
distance to the cluster's centroid, with overlap between the stems and the example
highlighted in blue. The GUI also supports adding and removing stopwords for the
purpose of forming more meaningful clusters.

## Getting Started
### Python
If you don't have Python 2 installed, install it on your Mac via the Homebrew
Package Manager. Install Homebrew using the following command:

    /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

Then, install Python using the following command:

    brew install python@2

Now, we can install the requirements via pip, Python's package manager. After
cloning the project from Github, navigate to the project directory and run the
following command:

    pip install -r requirements.txt

### Node
To install Node on your Mac, open your Terminal and run the following command:

    brew install node

Now, we can install node's requirements. Navigate to the project directory and
run the following command:

    npm install

## Starting the server
We're finally ready to run Clusterize. To start the server, navigate to the
project directory and run:

    node server.js

Following this, the GUI for Clusterize will be available at
http://localhost:3000/home.html. Enjoy!
