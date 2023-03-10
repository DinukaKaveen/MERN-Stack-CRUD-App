const express = require("express");
const { route } = require("express/lib/application");
const req = require("express/lib/request");
const res = require("express/lib/response");

const Posts_tbl = require("../models/posts"); //import created models

const router = express.Router(); //define router constructor to send http requests using Express.js Router function

//save posts using router.post method
router.post("/post/save", (req, res) => {
  let newPost = new Posts_tbl(req.body); //get request's body of Posts constructor into newPost variable

  //save post
  newPost.save((err) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: "Post Save Fail",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Post Save Successfully",
    });
  });
});

//get posts using router.get method
router.get("/posts", (req, res) => {
  //get posts
  Posts_tbl.find().exec((err, existingPosts) => {
    if (err) {
      return res.status(400).json({
        success: false,
      });
    }
    return res.status(200).json({
      success: true,
      existingPosts: existingPosts,
    });
  });
});

//get post by specific ID
router.get("/post/:id", (req, res) => {
  let postID = req.params.id;

  Posts_tbl.findById(postID).exec((err, specificPost) => {
    if (err) {
      return res.status(400).json({
        success: false,
      });
    }
    return res.status(200).json({
      success: true,
      specificPost: specificPost,
    });
  });
});

//update post
router.put("/post/update/:id", (req, res) => {
  let postID = req.params.id; //request id

  Posts_tbl.findByIdAndUpdate(postID, { $set: req.body }, (err) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: "Update Fail",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Successfully Update",
    });
  });
});

//delete post
router.delete("/post/delete/:id", (req, res) => {
  let postID = req.params.id;

  Posts_tbl.findByIdAndRemove(postID).exec((err, deletedPost) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: "Delete Fail",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Successfully Delete",
      deletedPost: deletedPost,
    });
  });
});

//export created router
module.exports = router;
