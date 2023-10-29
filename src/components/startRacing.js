import { Random } from "@woowacourse/mission-utils";

const checkGoOrStop = async () => {
  const number = Random.pickNumberInRange(0, 9);
  if (number >= 4 && number <= 9) return true;
  else if (number >= 0 && number <= 3) return false;
  else throw new Error("[ERROR] 랜덤 숫자 생성에서 오류가 발생했습니다.");
};

const changeRacingDistance = (carNameDict, carName, goOrStop) => {
  if (goOrStop == true) carNameDict[carName] += 1;
};

const startRacing = async (carNameDict, trialCount) => {
  for (let i = 0; i < trialCount; i++) {
    for (let carName in carNameDict) {
      const goOrStop = await checkGoOrStop();
      changeRacingDistance(carNameDict, carName, goOrStop);
    }
  }
  return carNameDict;
};

export { startRacing };
