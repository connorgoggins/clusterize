var port = process.env.PORT || 3000;

var express = require('express')
var app = express()
app.use(express.static(__dirname));

var path = require("path");

var stop_words = ["learn", "learnt", "realize", "believe"]


var spawn = require("child_process").spawn;

var fs = require("fs");
var csv = require("csv");

var cluster0;
var cluster1;
var cluster2;
var cluster3;
var cluster4;
var cluster5;
var cluster6;
var cluster7;
var cluster8;
var cluster9;
var example0;
var example1;
var example2;
var example3;
var example4;
var example5;
var example6;
var example7;
var example8;
var example9;

var new_example0 = "";
var new_example1 = "";
var new_example2 = "";
var new_example3 = "";
var new_example4 = "";
var new_example5 = "";
var new_example6 = "";
var new_example7 = "";
var new_example8 = "";
var new_example9 = "";

var new_cluster0 = "";
var new_cluster1 = "";
var new_cluster2 = "";
var new_cluster3 = "";
var new_cluster4 = "";
var new_cluster5 = "";
var new_cluster6 = "";
var new_cluster7 = "";
var new_cluster8 = "";
var new_cluster9 = "";

function indexOfMax(arr) {
    if (arr.length === 0) {
        return -1;
    }

    var max = arr[0];
    var maxIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }

    return maxIndex;
}

app.get('/', function (req, res) {
    //res.sendFile(path.join(__dirname+'/index.html'));
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/add_stopword', function (req, res) {
    console.log(req.query.new_word)
    stop_words.push(req.query.new_word)
    res.redirect('/');
});

app.get('/remove_stopword', function (req, res) {
    console.log(req.query.removed_word)

    var index = stop_words.indexOf(req.query.removed_word);

    if (index !== -1) {
        stop_words.splice(index, 1);
    }
    res.redirect('/');
});

app.get('/get_stopwords', function (req, res) {
    res.json({ stopwords: stop_words });
});

app.get('/run_script', function (req, res) {
  console.log(stop_words);
  var stop_words_string = stop_words.toString();
  stop_words_string = stop_words_string.replace(/,/g, " ");
  var pythonProcess = spawn('python',["kmeans_test.py", stop_words_string]);

  pythonProcess;

  var cluster0_g;

  pythonProcess.stdout.on('data', function (data){
      console.log(data.toString('utf8'));
      var resp = data.toString('utf8');
      console.log("resp:");
      console.log(resp);
      cluster0 = resp.substring(resp.indexOf("0:") + 4, resp.indexOf("Cluster 1:") - 1);
      cluster1 = resp.substring(resp.indexOf("1:") + 4, resp.indexOf("Cluster 2:") - 1);
      cluster2 = resp.substring(resp.indexOf("2:") + 4, resp.indexOf("Cluster 3:") - 1);
      cluster3 = resp.substring(resp.indexOf("3:") + 4, resp.indexOf("Cluster 4:") - 1);
      cluster4 = resp.substring(resp.indexOf("4:") + 4, resp.indexOf("Cluster 5:") - 1);
      cluster5 = resp.substring(resp.indexOf("5:") + 4, resp.indexOf("Cluster 6:") - 1);
      cluster6 = resp.substring(resp.indexOf("6:") + 4, resp.indexOf("Cluster 7:") - 1);
      cluster7 = resp.substring(resp.indexOf("7:") + 4, resp.indexOf("Cluster 8:") - 1);
      cluster8 = resp.substring(resp.indexOf("8:") + 4, resp.indexOf("Cluster 9:") - 1);
      cluster9 = resp.substring(resp.indexOf("9:") + 4, resp.indexOf("[[0]]:"));

      example0 = resp.substring(resp.indexOf("[[0]]:") + 7, resp.indexOf("[[1]]:") - 1);
      example1 = resp.substring(resp.indexOf("[[1]]:") + 7, resp.indexOf("[[2]]:") - 1);
      example2 = resp.substring(resp.indexOf("[[2]]:") + 7, resp.indexOf("[[3]]:") - 1);
      example3 = resp.substring(resp.indexOf("[[3]]:") + 7, resp.indexOf("[[4]]:") - 1);
      example4 = resp.substring(resp.indexOf("[[4]]:") + 7, resp.indexOf("[[5]]:") - 1);
      example5 = resp.substring(resp.indexOf("[[5]]:") + 7, resp.indexOf("[[6]]:") - 1);
      example6 = resp.substring(resp.indexOf("[[6]]:") + 7, resp.indexOf("[[7]]:") - 1);
      example7 = resp.substring(resp.indexOf("[[7]]:") + 7, resp.indexOf("[[8]]:") - 1);
      example8 = resp.substring(resp.indexOf("[[8]]:") + 7, resp.indexOf("[[9]]:") - 1);
      example9 = resp.substring(resp.indexOf("[[9]]") + 7, resp.length - 1);

      var example0_val = parseFloat(example0.substring(example0.lastIndexOf("0.")));
      var example1_val = parseFloat(example1.substring(example1.lastIndexOf("0.")));
      var example2_val = parseFloat(example2.substring(example2.lastIndexOf("0.")));
      var example3_val = parseFloat(example3.substring(example3.lastIndexOf("0.")));
      var example4_val = parseFloat(example4.substring(example4.lastIndexOf("0.")));
      var example5_val = parseFloat(example5.substring(example5.lastIndexOf("0.")));
      var example6_val = parseFloat(example6.substring(example6.lastIndexOf("0.")));
      var example7_val = parseFloat(example7.substring(example7.lastIndexOf("0.")));
      var example8_val = parseFloat(example8.substring(example8.lastIndexOf("0.")));
      var example9_val = parseFloat(example9.substring(example9.lastIndexOf("0.")));

      var examples = [example0, example1, example2, example3, example4, example5, example6, example7, example8, example9];
      var res = examples.sort(function(a,b) { return parseFloat(a.substring(a.lastIndexOf("0."))) - parseFloat(b.substring(b.lastIndexOf("0.")));});
      console.log(res);





      //console.log("resp:")
      //console.log(resp)

      //console.log("here is cluster 0:");
      //console.log(cluster0);
      //cluster0_g = cluster0;

      new_example0 = "";
      new_example1 = "";
      new_example2 = "";
      new_example3 = "";
      new_example4 = "";
      new_example5 = "";
      new_example6 = "";
      new_example7 = "";
      new_example8 = "";
      new_example9 = "";

      new_cluster0 = "";
      new_cluster1 = "";
      new_cluster2 = "";
      new_cluster3 = "";
      new_cluster4 = "";
      new_cluster5 = "";
      new_cluster6 = "";
      new_cluster7 = "";
      new_cluster8 = "";
      new_cluster9 = "";

      var keywords = cluster0.split("  ");
      var words = examples[0].split(" ");
      for (var i = 0; i < words.length; i++) {
          var found_match = 0;
          if (((words[i].toLowerCase()).indexOf(keywords[0]) !== -1) && (found_match == 0)) {
            new_example0 += "<strong class='text-primary'>" + words[i] + "</strong> ";
            keywords[0] = "<strong class='text-primary'>" + keywords[0] + "</strong>";
          }
          else if (((words[i].toLowerCase()).indexOf(keywords[1]) !== -1) && (found_match == 0)) {
            new_example0 += "<strong class='text-primary'>" + words[i] + "</strong> ";
            keywords[1] = "<strong class='text-primary'>" + keywords[1] + "</strong>"
          }
          else if (((words[i].toLowerCase()).indexOf(keywords[2]) !== -1) && (found_match == 0)) {
            new_example0 += "<strong class='text-primary'>" + words[i] + "</strong> ";
            keywords[2] = "<strong class='text-primary'>" + keywords[2] + "</strong>"
          }
          else if (((words[i].toLowerCase()).indexOf(keywords[3]) !== -1) && (found_match == 0)) {
            new_example0 += "<strong class='text-primary'>" + words[i] + "</strong> ";
            keywords[3] = "<strong class='text-primary'>" + keywords[3] + "</strong>"
          }
          else if (((words[i].toLowerCase()).indexOf(keywords[4]) !== -1) && (found_match == 0)) {
            new_example0 += "<strong class='text-primary'>" + words[i] + "</strong> ";
            keywords[4] = "<strong class='text-primary'>" + keywords[4] + "</strong>"
          }
          else if (((words[i].toLowerCase()).indexOf(keywords[5]) !== -1) && (found_match == 0)) {
            new_example0 += "<strong class='text-primary'>" + words[i] + "</strong> ";
            keywords[5] = "<strong class='text-primary'>" + keywords[5] + "</strong>"
          }
          else if (((words[i].toLowerCase()).indexOf(keywords[6]) !== -1) && (found_match == 0)) {
            new_example0 += "<strong class='text-primary'>" + words[i] + "</strong> ";
            keywords[6] = "<strong class='text-primary'>" + keywords[6] + "</strong>"
          }
          else if (((words[i].toLowerCase()).indexOf(keywords[7]) !== -1) && (found_match == 0)) {
            new_example0 += "<strong class='text-primary'>" + words[i] + "</strong> ";
            keywords[7] = "<strong class='text-primary'>" + keywords[7] + "</strong>"
          }
          else if (((words[i].toLowerCase()).indexOf(keywords[8]) !== -1) && (found_match == 0)) {
            new_example0 += "<strong class='text-primary'>" + words[i] + "</strong> ";
            keywords[8] = "<strong class='text-primary'>" + keywords[8] + "</strong>"
          }
          else if (((words[i].toLowerCase()).indexOf(keywords[9]) !== -1) && (found_match == 0)) {
            new_example0 += "<strong class='text-primary'>" + words[i] + "</strong> ";
            keywords[9] = "<strong class='text-primary'>" + keywords[9] + "</strong>"
          }
          else {
            new_example0 += words[i] + " "
          }
      }
      new_cluster0 = keywords.join(" ");

      keywords = cluster1.split("  ");
      words = examples[1].split(" ");
      for (var i = 0; i < words.length; i++) {
          var found_match = 0;
          if (((words[i].toLowerCase()).indexOf(keywords[0]) !== -1) && (found_match == 0)) {
            new_example1 += "<strong class='text-primary'>" + words[i] + "</strong> ";
            keywords[0] = "<strong class='text-primary'>" + keywords[0] + "</strong>";
          }
          else if (((words[i].toLowerCase()).indexOf(keywords[1]) !== -1) && (found_match == 0)) {
            new_example1 += "<strong class='text-primary'>" + words[i] + "</strong> ";
            keywords[1] = "<strong class='text-primary'>" + keywords[1] + "</strong>";
          }
          else if (((words[i].toLowerCase()).indexOf(keywords[2]) !== -1) && (found_match == 0)) {
            new_example1 += "<strong class='text-primary'>" + words[i] + "</strong> ";
            keywords[2] = "<strong class='text-primary'>" + keywords[2] + "</strong>";
          }
          else if (((words[i].toLowerCase()).indexOf(keywords[3]) !== -1) && (found_match == 0)) {
            new_example1 += "<strong class='text-primary'>" + words[i] + "</strong> ";
            keywords[3] = "<strong class='text-primary'>" + keywords[3] + "</strong>";
          }
          else if (((words[i].toLowerCase()).indexOf(keywords[4]) !== -1) && (found_match == 0)) {
            new_example1 += "<strong class='text-primary'>" + words[i] + "</strong> ";
            keywords[4] = "<strong class='text-primary'>" + keywords[4] + "</strong>";
          }
          else if (((words[i].toLowerCase()).indexOf(keywords[5]) !== -1) && (found_match == 0)) {
            new_example1 += "<strong class='text-primary'>" + words[i] + "</strong> ";
            keywords[5] = "<strong class='text-primary'>" + keywords[5] + "</strong>";
          }
          else if (((words[i].toLowerCase()).indexOf(keywords[6]) !== -1) && (found_match == 0)) {
            new_example1 += "<strong class='text-primary'>" + words[i] + "</strong> ";
            keywords[6] = "<strong class='text-primary'>" + keywords[6] + "</strong>";
          }
          else if (((words[i].toLowerCase()).indexOf(keywords[7]) !== -1) && (found_match == 0)) {
            new_example1 += "<strong class='text-primary'>" + words[i] + "</strong> ";
            keywords[7] = "<strong class='text-primary'>" + keywords[7] + "</strong>";
          }
          else if (((words[i].toLowerCase()).indexOf(keywords[8]) !== -1) && (found_match == 0)) {
            new_example1 += "<strong class='text-primary'>" + words[i] + "</strong> ";
            keywords[8] = "<strong class='text-primary'>" + keywords[8] + "</strong>";
          }
          else if (((words[i].toLowerCase()).indexOf(keywords[9]) !== -1) && (found_match == 0)) {
            new_example1 += "<strong class='text-primary'>" + words[i] + "</strong> ";
            keywords[9] = "<strong class='text-primary'>" + keywords[9] + "</strong>";
          }
          else {
            new_example1 += words[i] + " "
          }
      }
      new_cluster1 = keywords.join(" ");

      keywords = cluster2.split("  ");
      words = examples[2].split(" ");
      for (var i = 0; i < words.length; i++) {
        var found_match = 0;
        if (((words[i].toLowerCase()).indexOf(keywords[0]) !== -1) && (found_match == 0)) {
          new_example2 += "<strong class='text-primary'>" + words[i] + "</strong> ";
          keywords[0] = "<strong class='text-primary'>" + keywords[0] + "</strong>";
        }
        else if (((words[i].toLowerCase()).indexOf(keywords[1]) !== -1) && (found_match == 0)) {
          new_example2 += "<strong class='text-primary'>" + words[i] + "</strong> ";
          keywords[1] = "<strong class='text-primary'>" + keywords[1] + "</strong>";
        }
        else if (((words[i].toLowerCase()).indexOf(keywords[2]) !== -1) && (found_match == 0)) {
          new_example2 += "<strong class='text-primary'>" + words[i] + "</strong> ";
          keywords[2] = "<strong class='text-primary'>" + keywords[2] + "</strong>";
        }
        else if (((words[i].toLowerCase()).indexOf(keywords[3]) !== -1) && (found_match == 0)) {
          new_example2 += "<strong class='text-primary'>" + words[i] + "</strong> ";
          keywords[3] = "<strong class='text-primary'>" + keywords[3] + "</strong>";
        }
        else if (((words[i].toLowerCase()).indexOf(keywords[4]) !== -1) && (found_match == 0)) {
          new_example2 += "<strong class='text-primary'>" + words[i] + "</strong> ";
          keywords[4] = "<strong class='text-primary'>" + keywords[4] + "</strong>";
        }
        else if (((words[i].toLowerCase()).indexOf(keywords[5]) !== -1) && (found_match == 0)) {
          new_example2 += "<strong class='text-primary'>" + words[i] + "</strong> ";
          keywords[5] = "<strong class='text-primary'>" + keywords[5] + "</strong>";
        }
        else if (((words[i].toLowerCase()).indexOf(keywords[6]) !== -1) && (found_match == 0)) {
          new_example2 += "<strong class='text-primary'>" + words[i] + "</strong> ";
          keywords[6] = "<strong class='text-primary'>" + keywords[6] + "</strong>";
        }
        else if (((words[i].toLowerCase()).indexOf(keywords[7]) !== -1) && (found_match == 0)) {
          new_example2 += "<strong class='text-primary'>" + words[i] + "</strong> ";
          keywords[7] = "<strong class='text-primary'>" + keywords[7] + "</strong>";
        }
        else if (((words[i].toLowerCase()).indexOf(keywords[8]) !== -1) && (found_match == 0)) {
          new_example2 += "<strong class='text-primary'>" + words[i] + "</strong> ";
          keywords[8] = "<strong class='text-primary'>" + keywords[8] + "</strong>";
        }
        else if (((words[i].toLowerCase()).indexOf(keywords[9]) !== -1) && (found_match == 0)) {
          new_example2 += "<strong class='text-primary'>" + words[i] + "</strong> ";
          keywords[9] = "<strong class='text-primary'>" + keywords[9] + "</strong>";
        }
        else {
          new_example2 += words[i] + " "
        }
      }
      new_cluster2 = keywords.join(" ");

      keywords = cluster3.split("  ");
      words = examples[3].split(" ");
      for (var i = 0; i < words.length; i++) {
        var found_match = 0;
        if (((words[i].toLowerCase()).indexOf(keywords[0]) !== -1) && (found_match == 0)) {
          new_example3 += "<strong class='text-primary'>" + words[i] + "</strong> ";
          keywords[0] = "<strong class='text-primary'>" + keywords[0] + "</strong>";
        }
        else if (((words[i].toLowerCase()).indexOf(keywords[1]) !== -1) && (found_match == 0)) {
          new_example3 += "<strong class='text-primary'>" + words[i] + "</strong> ";
          keywords[1] = "<strong class='text-primary'>" + keywords[1] + "</strong>";
        }
        else if (((words[i].toLowerCase()).indexOf(keywords[2]) !== -1) && (found_match == 0)) {
          new_example3 += "<strong class='text-primary'>" + words[i] + "</strong> ";
          keywords[2] = "<strong class='text-primary'>" + keywords[2] + "</strong>";
        }
        else if (((words[i].toLowerCase()).indexOf(keywords[3]) !== -1) && (found_match == 0)) {
          new_example3 += "<strong class='text-primary'>" + words[i] + "</strong> ";
          keywords[3] = "<strong class='text-primary'>" + keywords[3] + "</strong>";
        }
        else if (((words[i].toLowerCase()).indexOf(keywords[4]) !== -1) && (found_match == 0)) {
          new_example3 += "<strong class='text-primary'>" + words[i] + "</strong> ";
          keywords[4] = "<strong class='text-primary'>" + keywords[4] + "</strong>";
        }
        else if (((words[i].toLowerCase()).indexOf(keywords[5]) !== -1) && (found_match == 0)) {
          new_example3 += "<strong class='text-primary'>" + words[i] + "</strong> ";
          keywords[5] = "<strong class='text-primary'>" + keywords[5] + "</strong>";
        }
        else if (((words[i].toLowerCase()).indexOf(keywords[6]) !== -1) && (found_match == 0)) {
          new_example3 += "<strong class='text-primary'>" + words[i] + "</strong> ";
          keywords[6] = "<strong class='text-primary'>" + keywords[6] + "</strong>";
        }
        else if (((words[i].toLowerCase()).indexOf(keywords[7]) !== -1) && (found_match == 0)) {
          new_example3 += "<strong class='text-primary'>" + words[i] + "</strong> ";
          keywords[7] = "<strong class='text-primary'>" + keywords[7] + "</strong>";
        }
        else if (((words[i].toLowerCase()).indexOf(keywords[8]) !== -1) && (found_match == 0)) {
          new_example3 += "<strong class='text-primary'>" + words[i] + "</strong> ";
          keywords[8] = "<strong class='text-primary'>" + keywords[8] + "</strong>";
        }
        else if (((words[i].toLowerCase()).indexOf(keywords[9]) !== -1) && (found_match == 0)) {
          new_example3 += "<strong class='text-primary'>" + words[i] + "</strong> ";
          keywords[9] = "<strong class='text-primary'>" + keywords[9] + "</strong>";
        }
        else {
          new_example3 += words[i] + " "
        }
      }
      new_cluster3 = keywords.join(" ");

      keywords = cluster4.split("  ");
      words = examples[4].split(" ");
      for (var i = 0; i < words.length; i++) {
        var found_match = 0;
        if (((words[i].toLowerCase()).indexOf(keywords[0]) !== -1) && (found_match == 0)) {
          new_example4 += "<strong class='text-primary'>" + words[i] + "</strong> ";
          keywords[0] = "<strong class='text-primary'>" + keywords[0] + "</strong>";
        }
        else if (((words[i].toLowerCase()).indexOf(keywords[1]) !== -1) && (found_match == 0)) {
          new_example4 += "<strong class='text-primary'>" + words[i] + "</strong> ";
          keywords[1] = "<strong class='text-primary'>" + keywords[1] + "</strong>";
        }
        else if (((words[i].toLowerCase()).indexOf(keywords[2]) !== -1) && (found_match == 0)) {
          new_example4 += "<strong class='text-primary'>" + words[i] + "</strong> ";
          keywords[2] = "<strong class='text-primary'>" + keywords[2] + "</strong>";
        }
        else if (((words[i].toLowerCase()).indexOf(keywords[3]) !== -1) && (found_match == 0)) {
          new_example4 += "<strong class='text-primary'>" + words[i] + "</strong> ";
          keywords[3] = "<strong class='text-primary'>" + keywords[3] + "</strong>";
        }
        else if (((words[i].toLowerCase()).indexOf(keywords[4]) !== -1) && (found_match == 0)) {
          new_example4 += "<strong class='text-primary'>" + words[i] + "</strong> ";
          keywords[4] = "<strong class='text-primary'>" + keywords[4] + "</strong>";
        }
        else if (((words[i].toLowerCase()).indexOf(keywords[5]) !== -1) && (found_match == 0)) {
          new_example4 += "<strong class='text-primary'>" + words[i] + "</strong> ";
          keywords[5] = "<strong class='text-primary'>" + keywords[5] + "</strong>";
        }
        else if (((words[i].toLowerCase()).indexOf(keywords[6]) !== -1) && (found_match == 0)) {
          new_example4 += "<strong class='text-primary'>" + words[i] + "</strong> ";
          keywords[6] = "<strong class='text-primary'>" + keywords[6] + "</strong>";
        }
        else if (((words[i].toLowerCase()).indexOf(keywords[7]) !== -1) && (found_match == 0)) {
          new_example4 += "<strong class='text-primary'>" + words[i] + "</strong> ";
          keywords[7] = "<strong class='text-primary'>" + keywords[7] + "</strong>";
        }
        else if (((words[i].toLowerCase()).indexOf(keywords[8]) !== -1) && (found_match == 0)) {
          new_example4 += "<strong class='text-primary'>" + words[i] + "</strong> ";
          keywords[8] = "<strong class='text-primary'>" + keywords[8] + "</strong>";
        }
        else if (((words[i].toLowerCase()).indexOf(keywords[9]) !== -1) && (found_match == 0)) {
          new_example4 += "<strong class='text-primary'>" + words[i] + "</strong> ";
          keywords[9] = "<strong class='text-primary'>" + keywords[9] + "</strong>";
        }
        else {
          new_example4 += words[i] + " "
        }
      }
      new_cluster4 = keywords.join(" ");

      keywords = cluster5.split("  ");
      words = examples[5].split(" ");
      for (var i = 0; i < words.length; i++) {
        var found_match = 0;
        if (((words[i].toLowerCase()).indexOf(keywords[0]) !== -1) && (found_match == 0)) {
          new_example5 += "<strong class='text-primary'>" + words[i] + "</strong> ";
          keywords[0] = "<strong class='text-primary'>" + keywords[0] + "</strong>";
        }
        else if (((words[i].toLowerCase()).indexOf(keywords[1]) !== -1) && (found_match == 0)) {
          new_example5 += "<strong class='text-primary'>" + words[i] + "</strong> ";
          keywords[1] = "<strong class='text-primary'>" + keywords[1] + "</strong>";
        }
        else if (((words[i].toLowerCase()).indexOf(keywords[2]) !== -1) && (found_match == 0)) {
          new_example5 += "<strong class='text-primary'>" + words[i] + "</strong> ";
          keywords[2] = "<strong class='text-primary'>" + keywords[2] + "</strong>";
        }
        else if (((words[i].toLowerCase()).indexOf(keywords[3]) !== -1) && (found_match == 0)) {
          new_example5 += "<strong class='text-primary'>" + words[i] + "</strong> ";
          keywords[3] = "<strong class='text-primary'>" + keywords[3] + "</strong>";
        }
        else if (((words[i].toLowerCase()).indexOf(keywords[4]) !== -1) && (found_match == 0)) {
          new_example5 += "<strong class='text-primary'>" + words[i] + "</strong> ";
          keywords[4] = "<strong class='text-primary'>" + keywords[4] + "</strong>";
        }
        else if (((words[i].toLowerCase()).indexOf(keywords[5]) !== -1) && (found_match == 0)) {
          new_example5 += "<strong class='text-primary'>" + words[i] + "</strong> ";
          keywords[5] = "<strong class='text-primary'>" + keywords[5] + "</strong>";
        }
        else if (((words[i].toLowerCase()).indexOf(keywords[6]) !== -1) && (found_match == 0)) {
          new_example5 += "<strong class='text-primary'>" + words[i] + "</strong> ";
          keywords[6] = "<strong class='text-primary'>" + keywords[6] + "</strong>";
        }
        else if (((words[i].toLowerCase()).indexOf(keywords[7]) !== -1) && (found_match == 0)) {
          new_example5 += "<strong class='text-primary'>" + words[i] + "</strong> ";
          keywords[7] = "<strong class='text-primary'>" + keywords[7] + "</strong>";
        }
        else if (((words[i].toLowerCase()).indexOf(keywords[8]) !== -1) && (found_match == 0)) {
          new_example5 += "<strong class='text-primary'>" + words[i] + "</strong> ";
          keywords[8] = "<strong class='text-primary'>" + keywords[8] + "</strong>";
        }
        else if (((words[i].toLowerCase()).indexOf(keywords[9]) !== -1) && (found_match == 0)) {
          new_example5 += "<strong class='text-primary'>" + words[i] + "</strong> ";
          keywords[9] = "<strong class='text-primary'>" + keywords[9] + "</strong>";
        }
        else {
          new_example5 += words[i] + " "
        }
      }
      new_cluster5 = keywords.join(" ");

      keywords = cluster6.split("  ");
      words = examples[6].split(" ");
      for (var i = 0; i < words.length; i++) {
        var found_match = 0;
        if (((words[i].toLowerCase()).indexOf(keywords[0]) !== -1) && (found_match == 0)) {
          new_example6 += "<strong class='text-primary'>" + words[i] + "</strong> ";
          keywords[0] = "<strong class='text-primary'>" + keywords[0] + "</strong>";
        }
        else if (((words[i].toLowerCase()).indexOf(keywords[1]) !== -1) && (found_match == 0)) {
          new_example6 += "<strong class='text-primary'>" + words[i] + "</strong> ";
          keywords[1] = "<strong class='text-primary'>" + keywords[1] + "</strong>";
        }
        else if (((words[i].toLowerCase()).indexOf(keywords[2]) !== -1) && (found_match == 0)) {
          new_example6 += "<strong class='text-primary'>" + words[i] + "</strong> ";
          keywords[2] = "<strong class='text-primary'>" + keywords[2] + "</strong>";
        }
        else if (((words[i].toLowerCase()).indexOf(keywords[3]) !== -1) && (found_match == 0)) {
          new_example6 += "<strong class='text-primary'>" + words[i] + "</strong> ";
          keywords[3] = "<strong class='text-primary'>" + keywords[3] + "</strong>";
        }
        else if (((words[i].toLowerCase()).indexOf(keywords[4]) !== -1) && (found_match == 0)) {
          new_example6 += "<strong class='text-primary'>" + words[i] + "</strong> ";
          keywords[4] = "<strong class='text-primary'>" + keywords[4] + "</strong>";
        }
        else if (((words[i].toLowerCase()).indexOf(keywords[5]) !== -1) && (found_match == 0)) {
          new_example6 += "<strong class='text-primary'>" + words[i] + "</strong> ";
          keywords[5] = "<strong class='text-primary'>" + keywords[5] + "</strong>";
        }
        else if (((words[i].toLowerCase()).indexOf(keywords[6]) !== -1) && (found_match == 0)) {
          new_example6 += "<strong class='text-primary'>" + words[i] + "</strong> ";
          keywords[6] = "<strong class='text-primary'>" + keywords[6] + "</strong>";
        }
        else if (((words[i].toLowerCase()).indexOf(keywords[7]) !== -1) && (found_match == 0)) {
          new_example6 += "<strong class='text-primary'>" + words[i] + "</strong> ";
          keywords[7] = "<strong class='text-primary'>" + keywords[7] + "</strong>";
        }
        else if (((words[i].toLowerCase()).indexOf(keywords[8]) !== -1) && (found_match == 0)) {
          new_example6 += "<strong class='text-primary'>" + words[i] + "</strong> ";
          keywords[8] = "<strong class='text-primary'>" + keywords[8] + "</strong>";
        }
        else if (((words[i].toLowerCase()).indexOf(keywords[9]) !== -1) && (found_match == 0)) {
          new_example6 += "<strong class='text-primary'>" + words[i] + "</strong> ";
          keywords[9] = "<strong class='text-primary'>" + keywords[9] + "</strong>";
        }
        else {
          new_example6 += words[i] + " "
        }
      }
      new_cluster6 = keywords.join(" ");

      keywords = cluster7.split("  ");
      words = examples[7].split(" ");
      for (var i = 0; i < words.length; i++) {
        var found_match = 0;
        if (((words[i].toLowerCase()).indexOf(keywords[0]) !== -1) && (found_match == 0)) {
          new_example7 += "<strong class='text-primary'>" + words[i] + "</strong> ";
          keywords[0] = "<strong class='text-primary'>" + keywords[0] + "</strong>";
        }
        else if (((words[i].toLowerCase()).indexOf(keywords[1]) !== -1) && (found_match == 0)) {
          new_example7 += "<strong class='text-primary'>" + words[i] + "</strong> ";
          keywords[1] = "<strong class='text-primary'>" + keywords[1] + "</strong>";
        }
        else if (((words[i].toLowerCase()).indexOf(keywords[2]) !== -1) && (found_match == 0)) {
          new_example7 += "<strong class='text-primary'>" + words[i] + "</strong> ";
          keywords[2] = "<strong class='text-primary'>" + keywords[2] + "</strong>";
        }
        else if (((words[i].toLowerCase()).indexOf(keywords[3]) !== -1) && (found_match == 0)) {
          new_example7 += "<strong class='text-primary'>" + words[i] + "</strong> ";
          keywords[3] = "<strong class='text-primary'>" + keywords[3] + "</strong>";
        }
        else if (((words[i].toLowerCase()).indexOf(keywords[4]) !== -1) && (found_match == 0)) {
          new_example7 += "<strong class='text-primary'>" + words[i] + "</strong> ";
          keywords[4] = "<strong class='text-primary'>" + keywords[4] + "</strong>";
        }
        else if (((words[i].toLowerCase()).indexOf(keywords[5]) !== -1) && (found_match == 0)) {
          new_example7 += "<strong class='text-primary'>" + words[i] + "</strong> ";
          keywords[5] = "<strong class='text-primary'>" + keywords[5] + "</strong>";
        }
        else if (((words[i].toLowerCase()).indexOf(keywords[6]) !== -1) && (found_match == 0)) {
          new_example7 += "<strong class='text-primary'>" + words[i] + "</strong> ";
          keywords[6] = "<strong class='text-primary'>" + keywords[6] + "</strong>";
        }
        else if (((words[i].toLowerCase()).indexOf(keywords[7]) !== -1) && (found_match == 0)) {
          new_example7 += "<strong class='text-primary'>" + words[i] + "</strong> ";
          keywords[7] = "<strong class='text-primary'>" + keywords[7] + "</strong>";
        }
        else if (((words[i].toLowerCase()).indexOf(keywords[8]) !== -1) && (found_match == 0)) {
          new_example7 += "<strong class='text-primary'>" + words[i] + "</strong> ";
          keywords[8] = "<strong class='text-primary'>" + keywords[8] + "</strong>";
        }
        else if (((words[i].toLowerCase()).indexOf(keywords[9]) !== -1) && (found_match == 0)) {
          new_example7 += "<strong class='text-primary'>" + words[i] + "</strong> ";
          keywords[9] = "<strong class='text-primary'>" + keywords[9] + "</strong>";
        }
        else {
          new_example7 += words[i] + " "
        }
      }
      new_cluster7 = keywords.join(" ");

      keywords = cluster8.split("  ");
      words = examples[8].split(" ");
      for (var i = 0; i < words.length; i++) {
        var found_match = 0;
        if (((words[i].toLowerCase()).indexOf(keywords[0]) !== -1) && (found_match == 0)) {
          new_example8 += "<strong class='text-primary'>" + words[i] + "</strong> ";
          keywords[0] = "<strong class='text-primary'>" + keywords[0] + "</strong>";
        }
        else if (((words[i].toLowerCase()).indexOf(keywords[1]) !== -1) && (found_match == 0)) {
          new_example8 += "<strong class='text-primary'>" + words[i] + "</strong> ";
          keywords[1] = "<strong class='text-primary'>" + keywords[1] + "</strong>";
        }
        else if (((words[i].toLowerCase()).indexOf(keywords[2]) !== -1) && (found_match == 0)) {
          new_example8 += "<strong class='text-primary'>" + words[i] + "</strong> ";
          keywords[2] = "<strong class='text-primary'>" + keywords[2] + "</strong>";
        }
        else if (((words[i].toLowerCase()).indexOf(keywords[3]) !== -1) && (found_match == 0)) {
          new_example8 += "<strong class='text-primary'>" + words[i] + "</strong> ";
          keywords[3] = "<strong class='text-primary'>" + keywords[3] + "</strong>";
        }
        else if (((words[i].toLowerCase()).indexOf(keywords[4]) !== -1) && (found_match == 0)) {
          new_example8 += "<strong class='text-primary'>" + words[i] + "</strong> ";
          keywords[4] = "<strong class='text-primary'>" + keywords[4] + "</strong>";
        }
        else if (((words[i].toLowerCase()).indexOf(keywords[5]) !== -1) && (found_match == 0)) {
          new_example8 += "<strong class='text-primary'>" + words[i] + "</strong> ";
          keywords[5] = "<strong class='text-primary'>" + keywords[5] + "</strong>";
        }
        else if (((words[i].toLowerCase()).indexOf(keywords[6]) !== -1) && (found_match == 0)) {
          new_example8 += "<strong class='text-primary'>" + words[i] + "</strong> ";
          keywords[6] = "<strong class='text-primary'>" + keywords[6] + "</strong>";
        }
        else if (((words[i].toLowerCase()).indexOf(keywords[7]) !== -1) && (found_match == 0)) {
          new_example8 += "<strong class='text-primary'>" + words[i] + "</strong> ";
          keywords[7] = "<strong class='text-primary'>" + keywords[7] + "</strong>";
        }
        else if (((words[i].toLowerCase()).indexOf(keywords[8]) !== -1) && (found_match == 0)) {
          new_example8 += "<strong class='text-primary'>" + words[i] + "</strong> ";
          keywords[8] = "<strong class='text-primary'>" + keywords[8] + "</strong>";
        }
        else if (((words[i].toLowerCase()).indexOf(keywords[9]) !== -1) && (found_match == 0)) {
          new_example8 += "<strong class='text-primary'>" + words[i] + "</strong> ";
          keywords[9] = "<strong class='text-primary'>" + keywords[9] + "</strong>";
        }
        else {
          new_example8 += words[i] + " "
        }
      }
      new_cluster8 = keywords.join(" ");

      keywords = cluster9.split("  ");
      words = examples[9].split(" ");
      for (var i = 0; i < words.length; i++) {
        var found_match = 0;
        if (((words[i].toLowerCase()).indexOf(keywords[0]) !== -1) && (found_match == 0)) {
          new_example9 += "<strong class='text-primary'>" + words[i] + "</strong> ";
          keywords[0] = "<strong class='text-primary'>" + keywords[0] + "</strong>";
        }
        else if (((words[i].toLowerCase()).indexOf(keywords[1]) !== -1) && (found_match == 0)) {
          new_example9 += "<strong class='text-primary'>" + words[i] + "</strong> ";
          keywords[1] = "<strong class='text-primary'>" + keywords[1] + "</strong>";
        }
        else if (((words[i].toLowerCase()).indexOf(keywords[2]) !== -1) && (found_match == 0)) {
          new_example9 += "<strong class='text-primary'>" + words[i] + "</strong> ";
          keywords[2] = "<strong class='text-primary'>" + keywords[2] + "</strong>";
        }
        else if (((words[i].toLowerCase()).indexOf(keywords[3]) !== -1) && (found_match == 0)) {
          new_example9 += "<strong class='text-primary'>" + words[i] + "</strong> ";
          keywords[3] = "<strong class='text-primary'>" + keywords[3] + "</strong>";
        }
        else if (((words[i].toLowerCase()).indexOf(keywords[4]) !== -1) && (found_match == 0)) {
          new_example9 += "<strong class='text-primary'>" + words[i] + "</strong> ";
          keywords[4] = "<strong class='text-primary'>" + keywords[4] + "</strong>";
        }
        else if (((words[i].toLowerCase()).indexOf(keywords[5]) !== -1) && (found_match == 0)) {
          new_example9 += "<strong class='text-primary'>" + words[i] + "</strong> ";
          keywords[5] = "<strong class='text-primary'>" + keywords[5] + "</strong>";
        }
        else if (((words[i].toLowerCase()).indexOf(keywords[6]) !== -1) && (found_match == 0)) {
          new_example9 += "<strong class='text-primary'>" + words[i] + "</strong> ";
          keywords[6] = "<strong class='text-primary'>" + keywords[6] + "</strong>";
        }
        else if (((words[i].toLowerCase()).indexOf(keywords[7]) !== -1) && (found_match == 0)) {
          new_example9 += "<strong class='text-primary'>" + words[i] + "</strong> ";
          keywords[7] = "<strong class='text-primary'>" + keywords[7] + "</strong>";
        }
        else if (((words[i].toLowerCase()).indexOf(keywords[8]) !== -1) && (found_match == 0)) {
          new_example9 += "<strong class='text-primary'>" + words[i] + "</strong> ";
          keywords[8] = "<strong class='text-primary'>" + keywords[8] + "</strong>";
        }
        else if (((words[i].toLowerCase()).indexOf(keywords[9]) !== -1) && (found_match == 0)) {
          new_example9 += "<strong class='text-primary'>" + words[i] + "</strong> ";
          keywords[9] = "<strong class='text-primary'>" + keywords[9] + "</strong>";
        }
        else {
          new_example9 += words[i] + " "
        }
      }
      new_cluster9 = keywords.join(" ");

  });

  pythonProcess.stdout.on('end', function(){
    res.send({cluster0: new_cluster0, cluster1: new_cluster1, cluster2: new_cluster2, cluster3: new_cluster3, cluster4: new_cluster4, cluster5: new_cluster5, cluster6: new_cluster6, cluster7: new_cluster7, cluster8: new_cluster8, cluster9: new_cluster9, example0: new_example0, example1: new_example1, example2: new_example2, example3: new_example3, example4: new_example4, example5: new_example5, example6: new_example6, example7: new_example7, example8: new_example8, example9: new_example9});
    //console.log('fooo')
    //console.log(cluster0_g)
  })

});

app.listen(port);
console.log("Running at Port " + port);
