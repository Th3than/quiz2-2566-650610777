export const PostOwner = ({ name, ID, pic, posttext, likeNum }) => {
  return (
    <div>
      <div className="vstack gap-3">
        <div className="d-flex align-items-center gap-3">
          <img
            src={pic}
            width="48"
            height="48"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />
          <span className="fw-semibold fs-5">
            {name} {ID}
          </span>
        </div>

        <span>{posttext}</span>

        {likeNum > 0 && (
          <div className="d-flex align-items-center gap-1">
            <img src="/like.svg" width={20}></img>
            <span className="text-muted">{likeNum} คน</span>
          </div>
        )}
        <hr className="m-0 border" />
      </div>
    </div>
  );
};
