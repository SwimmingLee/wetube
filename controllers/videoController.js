export const home = (req, res) => res.render("home", {pageTitle: "Home", potato:1245});
export const search = (req, res) => {
    console.log(req);
    res.locals.searchingBy = req.term;
    const searchingBy = req.query.term;
    res.render("search", {pageTitle: "Search", searchingBy:req.query.term});
}
export const upload = (req, res) => 
    res.render("upload", {pageTitle: "Upload"})

export const vidoes = (req, res) => res.render("Videos");
export const videoDetail = (req, res) => 
    res.render("VideoDetail", {pageTitle: "VideoDetail"});
export const editVideo = (req, res) => 
    res.render("EditVideo", {pageTitle: "EditVideo"});
export const deleteVideo = (req, res) => 
    res.render("DeleteVideo", {pageTitle: "DeleteVideo"});
