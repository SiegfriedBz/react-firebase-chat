import clsx from 'clsx'
import '../Message.css'

const Message = ({ user, message }) => {

    const currentUserIsSender = () => {
        return message.uid === user.uid
    }

    const chatBubbleClass = clsx('d-flex', {
        "float-start"  : !currentUserIsSender(),
        "float-end"  : currentUserIsSender()
    })

  return (
      <li className="list-group-item shadow p-3 mb-2 bg-body-tertiary rounded">
          <div
              className={chatBubbleClass}>
              <div className="d-flex flex-column">
                  <div className="d-flex align-items-center">
                      <img
                          className='avatar rounded-circle'
                          src={message.avatar}
                          alt="user avatar"
                      />
                      <span className='ms-2'>{message.name}</span>
                  </div>
                  <span className='mt-2 flex-wrap'>{message.text}</span>
              </div>
          </div>
      </li>
  );
};

export default Message;
